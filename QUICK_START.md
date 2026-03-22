# 🎓 学术个人主页 - 快速参考

## ✅ 已创建的内容

### 核心配置
- ✓ `_config.yml` - Jekyll主配置文件
- ✓ `Gemfile` - Ruby依赖管理
- ✓ `.github/workflows/jekyll.yml` - 自动部署工作流

### 模板与样式
- ✓ `_layouts/default.html` - 响应式页面布局
- ✓ `assets/css/style.css` - 专业学术配色方案
- ✓ 移动设备响应式支持

### 主页面（已包含占位符）
- ✓ `index.md` - 首页
- ✓ `about.md` - 关于我
- ✓ `research.md` - 研究方向（详细列出AI与计算病理）
- ✓ `publications.md` - 论文发表页
- ✓ `projects.md` - 项目展示页
- ✓ `cv.md` - 个人简历
- ✓ `contact.md` - 联系方式

### 示例内容
- ✓ 示例论文：`_publications/2024-01-cancer-detection.md`
- ✓ 示例项目：`_projects/2023-prostate-grading.md`

### 文档与指南
- ✓ `README.md` - 完整的项目文档
- ✓ `SETUP_GUIDE.md` - 中英文配置指南

---

## 🚀 后续配置步骤 (5分钟)

### 第1步：修改基本配置 (_config.yml)
```yaml
url: "https://YOUR-USERNAME.github.io"  # 改为你的用户名
title: "Jingxin Liu"                      # 你的名字
description: "Professor | AI & Computational Pathology"
email: "your-email@university.edu"       # 你的邮箱
```

### 第2步：更新个人信息页面

编辑以下文件中的 `[Your University]`、`[Department Name]` 等：
- `index.md` - 首页欢迎词
- `about.md` - 学位和职位信息
- `research.md` - 研究兴趣（已预填AI与病理学）
- `cv.md` - 学历和工作经历
- `contact.md` - 办公室地址和电话

### 第3步：添加社交媒体链接
编辑 `_data/social_links.yml`：
```yaml
- label: "Google Scholar"
  url: "https://scholar.google.com/citations?user=YOUR_ID"
  
- label: "ORCID"
  url: "https://orcid.org/0000-0001-XXXX-XXXX"
```

### 第4步：上传头像
1. 将头像图片放在 `assets/images/` 文件夹
2. 在 `_config.yml` 中更新头像URL

### 第5步：添加你的论文
在 `_publications/` 文件夹创建新文件 `YYYY-MM-DD-title.md`：
```yaml
---
layout: post
title: "你的论文标题"
authors: "刘静欣, 其他作者"
venue: "期刊或会议名称"
year: 2024
date: 2024-03-22
category: "AI"          # 或 "Pathology" / "MIA"
doi: "10.XXXX/XXXXX"
excerpt: "论文简要介绍"
links:
  - label: "DOI"
    url: "https://doi.org/..."
  - label: "PDF"
    url: "https://..."
---

## 摘要
您的论文摘要和详细信息...
```

### 第6步：添加你的项目
在 `_projects/` 文件夹创建新文件：
```yaml
---
layout: post
title: "项目名称"
date: 2024-03-22
excerpt: "项目简介"
description: "项目详细描述"
featured: true
focus_area: "研究领域"
status: "进行中"
tags:
  - "标签1"
  - "标签2"
funding: "经费来源"
collaborators: "合作者"
---

项目详细信息...
```

---

## 🌐 本地预览与部署

### 本地预览
```bash
cd Jingxin-Liu.github.io
bundle install        # 首次需要运行
bundle exec jekyll serve
```
访问 `http://localhost:4000` 查看

### GitHub部署
```bash
git add .
git commit -m "Create academic profile"
git push origin main
```
自动工作流会在3-5分钟内部署到 `https://Jingxin-Liu.github.io`

---

## 🎨 自定义网站外观

### 修改配色
编辑 `assets/css/style.css` 中的CSS变量：
```css
:root {
  --primary-color: #1a3a52;      /* 深蓝色 - 改为你喜欢的颜色 */
  --secondary-color: #2c5aa0;    /* 蓝色 */
  --text-color: #333;             /* 正文色 */
  --accent-color: #d4534f;        /* 强调色/链接色 */
}
```

### 添加新页面
1. 在根目录创建 `new-page.md`
2. 添加YAML前置内容
3. 在 `_config.yml` 的 `header_pages` 中添加文件名

---

## 📋 网站功能清单

- [x] 响应式设计 - 桌面和手机都适配
- [x] 专业学术风格 - 适合大学教授
- [x] 发表管理 - 按年度/主题整理论文
- [x] 项目展示 - 支持标签、资金和合作者信息
- [x] SEO优化 - 包含Sitemap和Meta标签
- [x] 自动部署 - GitHub Actions工作流
- [x] 示例内容 - 论文和项目模板
- [x] 中英文配置指南

---

## 📚 重要文件位置

| 文件 | 用途 |
|------|------|
| `_config.yml` | **主配置文件 - 必须修改！** |
| `about.md` | 关于我页面 |
| `research.md` | 研究方向（已预填AI与病理学） |
| `publications.md` | 论文列表页面 |
| `cv.md` | 简历 |
| `contact.md` | 联系方式 |
| `_publications/` | 存放论文Markdown文件 |
| `_projects/` | 存放项目Markdown文件 |
| `assets/css/style.css` | 网站样式 |
| `_data/social_links.yml` | 社交媒体链接 |

---

## ⚠️ 常见问题

**Q: 网站发布后还看不到内容？**
- 检查GitHub Pages设置（Settings > Pages > Source 设为 main branch）
- 等待3-5分钟让GitHub Actions完成构建
- 强制刷新浏览器（Ctrl+Shift+R 或 Cmd+Shift+R）

**Q: 本地预览不工作？**
```bash
rm -rf _site/
bundle exec jekyll serve
```

**Q: 如何隐藏某些页面（例如正在编辑的页面）？**
在文件顶部添加：
```yaml
published: false
```

**Q: 想要改变网站主题？**
在 `_config.yml` 中尝试其他主题：
```yaml
theme: jekyll-theme-slate      # 或其他Jekyll主题
```

---

## 🔗 有用的链接

- Jekyll文档：https://jekyllrb.com/docs/
- GitHub Pages：https://pages.github.com/
- Markdown指南：https://getdevkit.org/markdown/

---

## 📝 下一步建议

1. ✅ 修改 `_config.yml` 中的个人信息
2. ✅ 上传头像到 `assets/images/`
3. ✅ 更新 `about.md` 和 `research.md` 中的详细内容
4. ✅ 添加你的论文到 `_publications/`
5. ✅ 添加你的项目到 `_projects/`
6. ✅ 推送所有更改到GitHub

**完成这些步骤后，你的学术个人主页就会上线！** 🚀

---

*最后更新时间: 2024年3月22日*
