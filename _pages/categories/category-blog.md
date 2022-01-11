---
title: "Blog"
layout: archive
permalink: categories/blog
author_profile: true
sidebar_main: true

sitemap:
  changefreq: daily
  priority : 1.0
---


{% assign posts = site.categories.blog %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
