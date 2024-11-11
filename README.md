<a href="https://www.discourse.org/">
  <img src="images/discourse-readme-logo.png" width="300px">
</a>

Discourse 是您社区的在线家园。我们为那些希望完全控制其网站运行方式和位置的人提供 100% 开源的社区平台。

我们的平台经过十多年的实战测试，并不断发展以满足用户对强大社区平台的需求。Discourse 允许您创建讨论主题并使用实时聊天进行连接，还可以访问不断增长的官方和社区主题。此外，我们提供各种插件，从由 [Discourse AI](https://meta.discourse.org/t/discourse-ai/259214) 驱动的聊天机器人到使用 [Data Explorer](https://meta.discourse.org/t/discourse-data-explorer/32566) 插件进行 SQL 分析等功能。

要了解更多信息，请访问 [**discourse.org**](https://www.discourse.org) 并加入我们的支持社区 [meta.discourse.org](https://meta.discourse.org)。

## 截图

<a href="https://blog.discourse.org/2023/08/discourse-3-1-is-here/"><img alt="Discourse 3.1" src="https://github-production-user-asset-6210df.s3.amazonaws.com/5862206/261215898-ae95f963-5ab4-4509-b87a-f9f6e9a109bf.png" width="720px"></a>

<a href="https://bbs.boingboing.net"><img alt="Boing Boing" src="https://github-production-user-asset-6210df.s3.amazonaws.com/5862206/261580781-1413ac96-5d08-40b2-bc8e-27c3f2d3bfe6.png" width="720px"></a>

<a href="https://twittercommunity.com/"><img alt="X Community" src="https://github.com/discourse/discourse/assets/2790986/ebb63eee-1927-4060-ada1-cf1bc774084c.png" width="720px"></a>

<img src="https://user-images.githubusercontent.com/1681963/52239118-b304f800-289b-11e9-9904-16450680d9ec.jpg" alt="Mobile" width="414">

浏览 [更多著名的 Discourse 实例](https://www.discourse.org/customers)。

## 开发

要设置您的环境，请按照适用于您操作系统的社区设置指南进行操作。

1. 如果您使用的是 macOS，请尝试 [macOS 开发指南](https://meta.discourse.org/t/beginners-guide-to-install-discourse-on-macos-for-development/15772)。
2. 如果您使用的是 Ubuntu，请尝试 [Ubuntu 开发指南](https://meta.discourse.org/t/beginners-guide-to-install-discourse-on-ubuntu-for-development/14727)。
3. 如果您使用的是 Windows，请尝试 [Windows 10 开发指南](https://meta.discourse.org/t/beginners-guide-to-install-discourse-on-windows-10-for-development/75149)。
4. 如果您希望使用更简单的基于 Docker 的安装，请尝试 [Docker 开发指南](https://meta.discourse.org/t/install-discourse-for-development-using-docker/102009)。

如果您熟悉 Rails 的工作原理并且对设置自己的环境感到舒适，您还可以尝试 [**Discourse 高级开发者指南**](docs/DEVELOPER-ADVANCED.md)，该指南主要针对 Ubuntu 和 macOS 环境。

在开始之前，请确保您拥有以下最低版本：[Ruby 3.2+](https://www.ruby-lang.org/en/downloads/)、[PostgreSQL 13](https://www.postgresql.org/download/)、[Redis 7](https://redis.io/download)。如果您遇到问题，请首先查看我们的 [**故障排除指南**](docs/TROUBLESHOOTING.md)！

## 设置 Discourse

如果您想为生产使用设置 Discourse 论坛，请参阅我们的 [**Discourse 安装指南**](docs/INSTALL.md)。

如果您正在寻找官方托管服务，请参阅 [discourse.org/pricing](https://www.discourse.org/pricing)。

## 要求

Discourse 是为未来 10 年的互联网而构建的，因此我们的要求很高。

Discourse 支持所有主要浏览器和平台的**最新稳定版本**：

| 浏览器              | 平板电脑      | 手机       |
| ------------------- | ------------ | ---------- |
| Apple Safari        | iPadOS       | iOS        |
| Google Chrome       | Android      | Android    |
| Microsoft Edge      |              |            |
| Mozilla Firefox     |              |            |

此外，我们旨在支持 iOS 15.7+ 上的 Safari。

## 构建工具

- [Ruby on Rails](https://github.com/rails/rails) &mdash; 我们的后端 API 是一个 Rails 应用程序。它以 JSON 格式响应请求。
- [Ember.js](https://github.com/emberjs/ember.js) &mdash; 我们的前端是一个与 Rails API 通信的 Ember.js 应用程序。
- [PostgreSQL](https://www.postgresql.org/) &mdash; 我们的主要数据存储在 Postgres 中。
- [Redis](https://redis.io/) &mdash; 我们使用 Redis 作为缓存和临时数据存储。
- [BrowserStack](https://www.browserstack.com/) &mdash; 我们使用 BrowserStack 在真实设备和浏览器上进行测试。

此外，还有*大量*的 Ruby Gems，完整列表在 [/main/Gemfile](https://github.com/discourse/discourse/blob/main/Gemfile)。

## 贡献

[![Build Status](https://github.com/discourse/discourse/actions/workflows/tests.yml/badge.svg)](https://github.com/discourse/discourse/actions)

Discourse 是 **100% 免费** 和 **开源** 的。我们鼓励并支持一个活跃、健康的社区，接受来自公众的贡献 &ndash; 包括您！

在为 Discourse 做出贡献之前：

1. 请阅读 [**discourse.org**](https://www.discourse.org) 上的完整使命声明。是的，我们确实相信这些东西；您也应该如此。
2. 阅读并签署 [**电子 Discourse 论坛贡献许可协议**](https://www.discourse.org/cla)。
3. 深入了解 [**CONTRIBUTING.MD**](CONTRIBUTING.md)，其中涵盖了提交错误、请求新功能、准备代码以进行拉取请求等。
4. 始终努力 [以相互尊重的方式](https://github.com/discourse/discourse/blob/main/docs/code-of-conduct.md) 进行合作。
5. 不确定要做什么？[**我们有一些想法。**](https://meta.discourse.org/t/so-you-want-to-help-out-with-discourse/3823)

我们期待看到您的拉取请求！

## 安全

我们非常重视 Discourse 的安全性；我们所有的代码都是 100% 开源和同行评审的。请阅读 [我们的安全指南](https://github.com/discourse/discourse/blob/main/docs/SECURITY.md) 以了解 Discourse 中的安全措施概述，或者如果您希望报告安全问题。

## Discourse 团队

最初的 Discourse 代码贡献者可以在 [**AUTHORS.MD**](docs/AUTHORS.md) 中找到。有关为 Discourse 的设计和实施做出贡献的众多个人的完整列表，请参阅 [官方 Discourse 博客](https://blog.discourse.org/2013/02/the-discourse-team/) 和 [GitHub 的贡献者列表](https://github.com/discourse/discourse/contributors)。

## 版权 / 许可证

版权所有 2014 - 2023 Civilized Discourse Construction Kit, Inc.

根据 GNU 通用公共许可证第 2.0 版（或更高版本）许可；
除非遵守许可证，否则您不得使用此作品。
您可以在 LICENSE 文件中或在以下网址获取许可证副本：

   https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

除非适用法律要求或书面同意，否则软件
按“原样”分发，不提供任何明示或暗示的保证。
有关详细信息，请参阅许可证。

Discourse 徽标和“Discourse 论坛” ®，Civilized Discourse Construction Kit, Inc.

## 可访问性

为了指导我们持续努力构建可访问的软件，我们遵循 [W3C 的 Web 内容可访问性指南 (WCAG)](https://www.w3.org/TR/WCAG21/)。如果您想报告使您难以使用 Discourse 的可访问性问题，请发送电子邮件至 accessibility@discourse.org。有关更多信息，请访问 [discourse.org/accessibility](https://discourse.org/accessibility)。

## 奉献

Discourse 是用 [爱，互联网风格](https://www.youtube.com/watch?v=Xe1TZaElTAs) 构建的。
