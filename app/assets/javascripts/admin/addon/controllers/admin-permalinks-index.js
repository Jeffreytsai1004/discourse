import Controller from "@ember/controller";
import { action } from "@ember/object";
import { or } from "@ember/object/computed";
import { service } from "@ember/service";
import { observes } from "@ember-decorators/object";
import { clipboardCopy } from "discourse/lib/utilities";
import { INPUT_DELAY } from "discourse-common/config/environment";
import discourseDebounce from "discourse-common/lib/debounce";
import I18n from "discourse-i18n";
import Permalink from "admin/models/permalink";

export default class AdminPermalinksIndexController extends Controller {
  @service dialog;
  @service router;
  @service toasts;

  loading = false;
  filter = null;

  @or("model.length", "filter") showSearch;

  _debouncedShow() {
    Permalink.findAll(this.filter).then((result) => {
      this.set("model", result);
      this.set("loading", false);
    });
  }

  @observes("filter")
  show() {
    discourseDebounce(this, this._debouncedShow, INPUT_DELAY);
  }

  @action
  copyUrl(pl) {
    let linkElement = document.querySelector(`#admin-permalink-${pl.id}`);
    clipboardCopy(linkElement.textContent);
    this.toasts.success({
      duration: 3000,
      data: {
        message: I18n.t("admin.permalink.copy_success"),
      },
    });
  }

  @action
  destroyRecord(permalink) {
    this.dialog.yesNoConfirm({
      message: I18n.t("admin.permalink.delete_confirm"),
      didConfirm: async () => {
        try {
          await this.store.destroyRecord("permalink", permalink);
          this.model.removeObject(permalink);
        } catch {
          this.dialog.alert(I18n.t("generic_error"));
        }
      },
    });
  }

  @action
  edit(record) {
    this.router.transitionTo("adminPermalinks.edit", record);
  }
}
