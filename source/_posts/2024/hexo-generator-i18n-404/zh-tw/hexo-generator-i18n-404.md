---
title: hexo-generator-i18n-404
author: Eddy Lin
i18n_404:
  usePageOn:
    - zh-CN
lang: zh-tw
date: 2024-05-11 15:45:57
categories:
  - hexo
tags:
  - hexo-generator
  - i18n
  - 404
---

Hexo 在使用多語系時，如果切換到文章對應的其他語系會顯示 404 頁面，然而此套件就是為了支援多語系的 404 頁面而誕生 ([hexo-generator-i18n-404](https://github.com/eddy1937/hexo-generator-i18n-404))。

**主要功能** 

- 多語系 404 頁面
- 多語系預設文章

<!-- more -->

## 啟用 Hexo 多語系

首先需要先啟用 Hexo 的多語系，在 _config.yml 中找到 `language`，後在下方新增要啟用的語系

這裡使用 `zh-tw`、`en`、`zh-CH` 為例，可以在使用的 hexo theme 找到支援的語系代號

```yml
# file: _config.yml
language: 
  - zh-tw # 第一個為預設語系
  - en
  - zh-CN
```

再來設定文章連結 `permalink` 以及檔案名稱規則 `new_post_name`，僅供參考可以依照自己喜好設定

```yml
# file: _config.yml
permalink: :lang/:name/
new_post_name: :year/:title/:lang/:title.md
```

## hexo-generator-i18n-404

安裝 hexo-generator-i18n-404 套件

```
npm i git+https://github.com/eddy1937/hexo-generator-i18n-404.git
```

### 多語系 404 頁面

<!-- ![](/images/posts/hexo-generator-i18n-404/i18n-404-demo.gif) -->
<img style="max-width: 480px; width: 100%; margin: 36px auto;" src="/images/posts/hexo-generator-i18n-404/i18n-404-demo.gif" />

在 _config.yml 中新增 `i18n_404` 設定，可以依照各語系設定，在找不到語系設定時會使用 `default`，{% post_link hexo-generator-i18n-404-demo 'Demo Post' %}


```yml
# file: _config.yml
i18n_404:
  default:
    title: '抱歉! 找不到文章'
    contentPath: scaffolds/404.md
  zh-tw:
    title: '抱歉! 找不到該文章'   
    # description: '' 
  en:
    title: 'Sorry! Post Not Found'
    # description: ''
  zh-CN:
    title: '抱歉! 找不到该文章'   
    # description: '' 
```

<table>
  <tr>
    <th>名稱</th>
    <th width="100%">說明</th>
  </tr>
  <tr>
    <td>title</td>
    <td>
      <span>文章標題</span>
      <br>
      <span>優先順序，lang.title > contentPath.title > default.title</span>
    </td>
  </tr>
  <tr>
    <td>description</td>
    <td>
      <span>文章描述</span>
      <br>
      <span>優先順序，lang.description > contentPath.description > default.description</span>
    </td>
  </tr>
  <tr>
    <td>contentPath</td>
    <td>
      <span>內容路徑，可以使用 markdown 檔案作為 404 頁面</span>
      <br>
      <span>優先順序，lang.contentPath > default.contentPath</span>
    </td>
  </tr>
</table>

### 多語系預設文章

在 post 上新增 `i18n_404.usePageOn` 來啟用預設文章，可以將當前 post 直接使用在其他語系版本 (已存在之語系文章不會受影響)

如下所示，可以將 `zh-tw` 語系文章，顯示在沒有文章的 `zh-CN` 語系

```yml
# file: your_post.md
title: post_title
author: Eddy Lin
lang: zh-tw
i18n_404:
  usePageOn:
    - zh-CN
```

也可以將 `i18n_404.usePageOn` 設定為 `all`，使該篇 post 使用在所有語系上

```yml
lang: zh-tw
i18n_404:
  usePageOn: all
```

本篇文章只有 `zh-tw`、`en` 版本，可以在下方切換語系至簡體中文 `zh-CN` 可以查看效果