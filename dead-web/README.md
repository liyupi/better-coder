# 🪦 数字墓园 | Digital Cemetery

> 纪念那些曾经辉煌的互联网产品 - 让逝去的数字记忆永远被铭记

## 📖 项目简介

数字墓园是一个专门用于记录和纪念已经关闭的互联网产品、网站和应用的网站。随着互联网的快速发展，许多曾经风靡一时的产品因为各种原因退出历史舞台。这个项目旨在保存这些数字时代的记忆，让人们能够回顾互联网发展的历程。

## ✨ 功能特性

- 📊 **全面的产品数据库**: 收录了从2009年至2024年关闭的各类互联网产品
- 🔍 **智能搜索功能**: 支持按产品名称、描述、分类进行搜索
- 📱 **多维度分类**: 按产品类型（网站/应用/服务）和地区（国内/国外）分类
- 📅 **时间轴展示**: 按年份倒序展示，清晰呈现产品关闭的时间线
- 🎨 **精美的哥特式设计**: 墓园主题的视觉设计，营造纪念氛围
- 📱 **响应式设计**: 完美适配桌面端和移动端
- ⚡ **纯静态网站**: 无需数据库，纯 HTML/CSS/JavaScript 实现

## 🗂️ 收录内容

### 产品类型
- **网站**: 社交网络、博客平台、视频网站等
- **应用**: 移动应用、桌面软件等
- **服务**: 在线服务、工具平台等

### 地区分布
- **国内产品**: 人人网、开心网、天涯社区、虾米音乐等
- **国外产品**: Google+、Vine、Yahoo Groups、Orkut等

### 涵盖年份
记录了2009年至2024年间关闭的互联网产品，共计24年的数字历史。

## 🎯 收录数据

截至目前，网站已收录了包括以下知名产品：

**国外产品**:
- Google Reader (2013) - 最受欢迎的RSS阅读器
- Vine (2017) - 6秒短视频的鼻祖
- Yahoo Groups (2020) - 曾经最大的在线社区
- Google+ (2019) - Google的社交网络尝试

**国内产品**:
- 人人网 (2024) - 中国版Facebook，承载80后90后青春回忆
- 开心网 (2019) - "偷菜"游戏的发源地
- 天涯社区 (2023) - 中国最早的网络社区之一
- 虾米音乐 (2021) - 阿里巴巴旗下的音乐流媒体服务

## 🛠️ 技术架构

- **前端**: HTML5 + CSS3 + Vanilla JavaScript
- **样式**: 自定义CSS，哥特式墓园主题设计
- **字体**: Google Fonts (Creepster + Noto Sans SC)
- **图标**: Simple Icons + Google Favicon API
- **部署**: 纯静态网站，可部署到任何静态托管平台

## 🚀 快速开始

### 本地运行

1. 克隆项目到本地
```bash
git clone [repository-url]
cd dead-web
```

2. 使用任意 HTTP 服务器运行
```bash
# 使用 Python
python3 -m http.server 8000

# 使用 Node.js
npx serve .

# 使用 PHP
php -S localhost:8000
```

3. 在浏览器中访问 `http://localhost:8000`

### 部署

项目为纯静态网站，可以部署到：
- GitHub Pages
- Netlify
- Vercel
- 任何支持静态网站的托管服务

## 📁 项目结构

```
dead-web/
├── index.html          # 主页面文件
└── README.md          # 项目说明文档
```

## 🎨 设计特色

- **墓园主题**: 采用黑灰色调，营造庄重的纪念氛围
- **哥特式字体**: 使用 Creepster 字体增强主题感
- **动画效果**: 微妙的动画增强用户体验
- **响应式布局**: 完美适配各种屏幕尺寸
- **加载动画**: 棺材图标的脉冲动画

## 📊 数据来源

本项目的数据来源于以下权威网站：
- [IndieWeb Site Deaths](https://indieweb.org/site-deaths)
- [SaaSHub Product Graveyard](https://www.saashub.com/product-graveyard)
- [Killed by Tech](https://killedby.tech/)
- [Shutdown Like A Boss](https://shutdownlikeaboss.com/)

## 🤝 贡献指南

欢迎为项目贡献数据和改进：

1. **添加新数据**: 在 `deadSites` 数组中添加新的产品信息
2. **改进设计**: 优化CSS样式和用户体验
3. **修复问题**: 报告和修复发现的bug
4. **完善文档**: 改进文档和说明

### 数据格式

```javascript
{
    name: "产品名称",
    url: "官方域名",
    type: "website|app|service",
    region: "domestic|international", 
    category: "产品分类",
    description: "产品描述",
    deathDate: "关闭日期 (YYYY-MM-DD)",
    year: 年份数字
}
```

## 📝 许可证

本项目基于 MIT 许可证开源，详见 LICENSE 文件。

## 🙏 致敬

向所有曾经为互联网发展做出贡献的产品和团队致敬。虽然它们已经离开，但它们在数字世界留下的印记将永远被铭记。

---

**愿逝去的数字产品安息** 🙏  
**May the departed digital products rest in peace**

---

© 2025 数字墓园 | 让逝去的互联网产品永远被铭记 | 数据截止到 2025 年 1 月 