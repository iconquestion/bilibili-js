# Bilibili JavaScript 脚本

Hello! This is my personal repository. Welcome!

欢迎访问我的 BilibiliJS 代码库。这里收集了一些我自己写过的 JavaScript 脚本和相关规则，主要用于个人学习、娱乐和日常使用。

## 声明

本项目更新完全随机，仅供个人学习娱乐使用。脚本质量不作任何保证，也不对任何违反平台使用规定所造成的影响负责。

## 下载与使用

如果只想下载文件，可以直接从 GitHub 仓库主页下载。

如果希望将脚本添加到浏览器并保持更新，推荐从我的 Greasy Fork 主页安装：

https://greasyfork.org/zh-CN/users/1000124-iconquestion

也可以访问我的 GitHub Pages 主页：

https://iconquestion.github.io/BilibiliJS/

## 脚本列表

| 文件 | 描述 |
| --- | --- |
| `bilibiliAutoDarkMode.js` | 让 `*.bilibili.com` 跟随系统深浅色自动切换。脚本代码很简洁，核心是复用 B 站 Header 内部原生的主题切换调用，因此会沿用站内自己的 CSS、cookie、`bili_dark` class 和事件广播逻辑。 |
| `bilibiliGetExp.js` | 获得 B 站观看视频经验、客户端分享视频经验，自动完成每日任务。 |
| `bilibiliGetExpV2.js` | `bilibiliGetExp.js` 的第二版，同样用于自动完成每日经验任务。 |
| `adBlockLists/bilibili.txt` | 阻止 B 站直播 P2P 上传功能，节省上传带宽和流量消耗。 |
| `bilibiliAutoGetRedpocket.js` | 自动参与 B 站直播间抢红包活动。 |
| `bilibiliClearNotifications.js` | 清除 B 站消息小红点。随手做的，类似功能的脚本网上也有很多，不打算再更新。目前只能把“我的消息”里的前 20 条标记已读。为什么不能做成“一键已读所有消息”呢？很简单，我没有那么多未读消息，没办法测试 -_-|| |
| `bilibiliLiveSign.js` | B 站直播自动签到。代码极其简单，网上类似甚多，同样不做更新。 |
| `bilibiliClearDynamics.js` | 筛选、删除 B 站特定条件的动态，方便一键清空无用抽奖动态。具体使用方法可参见脚本内注释。 |
| `biliDynPageDarkMode.css` | B 站动态页面深色主题样式。 |

## 示例图

`biliDynPageDarkMode.css` 示例：

![B 站动态页面深色主题示例](https://user-images.githubusercontent.com/39425011/211202219-ba978730-7e8b-4136-8ae5-b87882ce563f.png)
