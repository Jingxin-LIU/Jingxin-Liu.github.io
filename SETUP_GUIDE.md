# Site Setup Guide - 学术个人主页配置指南

[English](#english) | [中文](#chinese)

---

## Chinese - 中文

### 快速开始

这是一个基于Jekyll的学术个人主页模板。按照以下步骤进行配置：

#### 1. 安装依赖

```bash
# 首次安装
bundle install

# 更新依赖
bundle update
```

#### 2. 本地预览

```bash
bundle exec jekyll serve
```

访问 `http://localhost:4000` 查看网站。

#### 3. 主要配置文件修改

编辑 `_config.yml`：
- `url`: 改为 `https://YOUR-USERNAME.github.io`
- `title`: 你的名字
- `description`: 职位和研究方向的简短描述
- `author`: 你的名字
- `email`: 你的邮箱地址

#### 4. 更新个人信息页面

- **首页** (`index.md`) - 添加欢迎辞和研究亮点
- **关于我** (`about.md`) - 填写学位和职位信息
- **研究方向** (`research.md`) - 描述主要研究领域
- **简历** (`cv.md`) - 完整的学历和工作经历
- **联系方式** (`contact.md`) - 办公室地址和联系方式
- **社交媒体** (`_data/social_links.yml`) - Google Scholar, GitHub等链接

#### 5. 添加发表论文

在 `_publications/` 文件夹中创建新文件，例如 `2024-01-paper-title.md`：

```yaml
---
layout: post
title: "论文标题"
authors: "你的名字, 其他作者"
venue: "期刊或会议名称"
year: 2024
date: 2024-01-15
category: "AI"
doi: "10.XXXX/XXXXX"
excerpt: "论文简要描述"
links:
  - label: "DOI"
    url: "https://doi.org/..."
---

## 摘要

论文详细信息...
```

#### 6. 添加研究项目

在 `_projects/` 文件夹中创建新文件，例如 `2024-project-name.md`：

```yaml
---
layout: post
title: "项目名称"
date: 2024-01-15
excerpt: "项目简介"
description: "项目详细描述"
featured: true
focus_area: "研究领域"
status: "进行中"
tags:
  - "标签1"
  - "标签2"
funding: "经费来源"
collaborators: "合作者名单"
---

项目详细信息...
```

#### 7. 添加头像

1. 将头像文件放在 `assets/images/` 目录
2. 在 `_config.yml` 中更新 `github.avatar_url` 或直接在模板中引用

#### 8. 部署到GitHub Pages

1. 推送所有更改到GitHub主分支
2. 自动化工作流将构建和部署网站
3. 访问 `https://YOUR-USERNAME.github.io` 查看网站

### 自定义样式

编辑 `assets/css/style.css` 中的颜色变量：

```css
:root {
  --primary-color: #1a3a52;      /* 主色 */
  --secondary-color: #2c5aa0;    /* 辅助色 */
  --text-color: #333;             /* 文本色 */
  --accent-color: #d4534f;        /* 强调色 */
}
```

### 文件结构说明

```
Jingxin-Liu.github.io/
├── _config.yml              ← 主配置文件 (必修改)
├── _data/
│   └── social_links.yml    ← 社交媒体链接 (必修改)
├── _layouts/
│   └── default.html        ← 页面布局模板
├── assets/
│   ├── css/style.css       ← 样式表
│   └── images/             ← 存放图片和头像
├── _publications/          ← 论文集合
├── _projects/              ← 项目集合
├── index.md                ← 首页 (修改)
├── about.md                ← 关于页 (修改)
├── research.md             ← 研究页 (修改)
├── cv.md                   ← 简历页 (修改)
├── contact.md              ← 联系页 (修改)
├── publications.md         ← 论文列表页
├── projects.md             ← 项目列表页
├── Gemfile                 ← Ruby依赖
├── README.md               ← 项目文档
└── .github/workflows/      ← GitHub Actions工作流
```

### 常见问题

**Q: 网站不显示？**
- 检查GitHub Pages是否启用（Settings → Pages）
- 确保分支设置为 `main`

**Q: 本地预览不工作？**
```bash
# 清空缓存并重新构建
rm -rf _site/
bundle exec jekyll serve
```

**Q: 如何添加更多页面？**
创建新的 `.md` 文件，添加 YAML front matter：
```yaml
---
layout: default
title: "页面标题"
---

# 页面内容
```

然后在 `_config.yml` 中添加到 `header_pages` 列表。

### 推送到GitHub

```bash
# 提交更改
git add .
git commit -m "Update academic profile"
git push origin main
```

---

## English

### Quick Start

This is a Jekyll-based academic personal website template. Follow these steps to set up:

#### 1. Install Dependencies

```bash
# First time setup
bundle install

# Update dependencies
bundle update
```

#### 2. Local Preview

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your site.

#### 3. Main Configuration

Edit `_config.yml`:
- `url`: Change to `https://YOUR-USERNAME.github.io`
- `title`: Your name
- `description`: Short bio/research interests
- `author`: Your name
- `email`: Your email address

#### 4. Update Personal Information Pages

- **Home** (`index.md`) - Add welcome message and research highlights
- **About** (`about.md`) - Fill in education and positions
- **Research** (`research.md`) - Describe research areas
- **CV** (`cv.md`) - Complete academic history
- **Contact** (`contact.md`) - Office and contact details
- **Social** (`_data/social_links.yml`) - Add Google Scholar, GitHub, etc.

#### 5. Add Publications

Create new file in `_publications/` folder (e.g., `2024-01-paper-title.md`):

```yaml
---
layout: post
title: "Paper Title"
authors: "Your Name, Other Authors"
venue: "Journal or Conference Name"
year: 2024
date: 2024-01-15
category: "AI"
doi: "10.XXXX/XXXXX"
excerpt: "Brief paper description"
links:
  - label: "DOI"
    url: "https://doi.org/..."
---

## Abstract

Full paper details...
```

#### 6. Add Projects

Create new file in `_projects/` folder (e.g., `2024-project-name.md`):

```yaml
---
layout: post
title: "Project Name"
date: 2024-01-15
excerpt: "Project summary"
description: "Detailed project description"
featured: true
focus_area: "Research Area"
status: "Active"
tags:
  - "Tag1"
  - "Tag2"
funding: "Funding Source"
collaborators: "Collaborators"
---

Project details...
```

#### 7. Add Profile Picture

1. Place image in `assets/images/` directory
2. Update `github.avatar_url` in `_config.yml` or reference directly in template

#### 8. Deploy to GitHub Pages

1. Push all changes to GitHub main branch
2. Automated workflow will build and deploy
3. Visit `https://YOUR-USERNAME.github.io` to see your site

### Customize Styling

Edit color variables in `assets/css/style.css`:

```css
:root {
  --primary-color: #1a3a52;      /* Primary color */
  --secondary-color: #2c5aa0;    /* Secondary color */
  --text-color: #333;             /* Text color */
  --accent-color: #d4534f;        /* Accent color */
}
```

### Troubleshooting

**Q: Site not showing?**
- Check GitHub Pages is enabled (Settings → Pages)
- Ensure branch is set to `main`

**Q: Local preview not working?**
```bash
# Clear cache and rebuild
rm -rf _site/
bundle exec jekyll serve
```

**Q: How to add more pages?**
Create new `.md` file with YAML front matter:
```yaml
---
layout: default
title: "Page Title"
---

# Page Content
```

Then add to `header_pages` in `_config.yml`.

### Push to GitHub

```bash
# Commit changes
git add .
git commit -m "Update academic profile"
git push origin main
```

---

**For more information, see README.md and Jekyll documentation: https://jekyllrb.com/**
