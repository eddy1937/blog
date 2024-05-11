---
title: hexo-generator-i18n-404
author: Eddy Lin
lang: en
date: 2024-05-11 21:45:54
description: 'Use AI Translation'
categories:
  - hexo
tags:
  - hexo-generator
  - i18n
  - 404
---

When using i18n on Hexo, will display a 404 page if you switch to other languages corresponding to the post. However, this package was born to support i18n 404 pages ([hexo-generator-i18n-404](https://github.com/eddy1937/hexo-generator-i18n-404)).

**Main Features** 

- I18n 404 pages
- I18n default posts

<!-- more -->

## Enable Hexo I18n

First, you need to enable Hexo i18n. Find `language` in `_config.yml` and add the languages you want to enable.

Here we use `zh-tw`, `en`, `zh-CN` as examples. You can find the supported language codes in the Hexo theme you are using.

```yml
# file: _config.yml
language: 
  - zh-tw # The first one is the default language
  - en
  - zh-CN
```

Next, set the post link `permalink` and the file name rule `new_post_name`. This is for reference only and can be set according to your preference.

```yml
# file: _config.yml
permalink: :lang/:name/
new_post_name: :year/:title/:lang/:title.md
```

## hexo-generator-i18n-404

Install the hexo-generator-i18n-404 package

```
npm i git+https://github.com/eddy1937/hexo-generator-i18n-404.git
```


### I18n 404 Pages

<!-- ![](/images/posts/hexo-generator-i18n-404/i18n-404-demo.gif) -->
<img style="max-width: 480px; width: 100%; margin: 36px auto;" src="/images/posts/hexo-generator-i18n-404/i18n-404-demo.gif" />

Add `i18n_404` settings in `_config.yml`. You can set it according to each language. When the language setting cannot be found, it will use default. {% post_link hexo-generator-i18n-404-demo 'Demo Post' %}


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
    <th>Name</th>
    <th width="100%">Description</th>
  </tr>
  <tr>
    <td>title</td>
    <td>
      <span>Post title</span>
      <br>
      <span>Priority order，lang.title > contentPath.title > default.title</span>
    </td>
  </tr>
  <tr>
    <td>description</td>
    <td>
      <span>Post description</span>
      <br>
      <span>Priority order，lang.description > contentPath.description > default.description</span>
    </td>
  </tr>
  <tr>
    <td>contentPath</td>
    <td>
      <span>Content path, you can use a markdown file as a 404 page</span>
      <br>
      <span>Priority order，lang.contentPath > default.contentPath</span>
    </td>
  </tr>
</table>

### I18n Default Posts

Add `i18n_404.usePageOn` to the post to enable default posts. You can use the current post directly in other language versions (existing language posts will not be affected).

As shown below, you can display the `zh-tw` post in the `zh-CN` language.

```yml
# file: your_post.md
title: post_title
author: Eddy Lin
lang: zh-tw
i18n_404:
  usePageOn:
    - zh-CN
```

You can also set `i18n_404.usePageOn` to `all` to use this post in all languages.

```yml
lang: zh-tw
i18n_404:
  usePageOn: all
```

This post only has `zh-tw`, `en` versions. You can switch the language to Simplified Chinese(简体中文) `zh-CN` to check the effect