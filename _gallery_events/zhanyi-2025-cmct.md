---
layout: page
title: "2025 Best Master's Thesis Award"
date: 2026-04-24
category: awards
tags: [zhan-yi-liao, thesis-award, cmct-2026, nycu]
description: "Zhan-Yi Liao (M.S., NYCU; co-advised with Po-An Chen) recognized by the Algorithms and Computation Theory Society of Taiwan, presented at CMCT 2026."
img: assets/img/gallery/zhanyi-2025-cmct/02.jpg
importance: 1
---

**Awardee.** Zhan-Yi Liao (M.S., Institute of Information Management, National Yang Ming Chiao Tung University; co-advised with <a href="https://iim.nycu.edu.tw/en/teacher/chen-po-an" target="_blank">Po-An Chen</a>).

**Awarding body.** Algorithms and Computation Theory Society of Taiwan.

**Presentation venue.** <a href="https://cmct-2026.github.io/#/" target="_blank">CMCT 2026</a> (April 2026).

**Thesis.** *Structure-Aware Robust Counterfactual Explanations via Conditional Gaussian Network Classifiers* (<a href="https://thesis.lib.nycu.edu.tw/items/afad6b16-1a74-4d3b-9af9-6d0546212a73" target="_blank">NYCU ETD record</a>).

{% assign event_photos_jpg = site.static_files | where_exp: "f", "f.path contains 'gallery/zhanyi-2025-cmct/'" | where: "extname", ".jpg" %}
{% assign event_photos_jpeg = site.static_files | where_exp: "f", "f.path contains 'gallery/zhanyi-2025-cmct/'" | where: "extname", ".jpeg" %}
{% assign event_photos_png = site.static_files | where_exp: "f", "f.path contains 'gallery/zhanyi-2025-cmct/'" | where: "extname", ".png" %}
{% assign event_photos = event_photos_jpg | concat: event_photos_jpeg | concat: event_photos_png | sort: "path" %}

<style>
  .gallery-event-grid figure { margin: 0; height: 100%; }
  .gallery-event-grid figure img,
  .gallery-event-grid figure picture img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    display: block;
  }
</style>

{% if event_photos.size > 0 %}
<div class="row mt-4 gallery-event-grid">
{% for photo in event_photos %}
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path=photo.path title="2025 Best Master's Thesis Award: Zhan-Yi Liao" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
{% endfor %}
</div>
<div class="caption">
    From the CMCT 2026 award ceremony. Click any photo to enlarge.
</div>
{% endif %}

<p class="mt-4"><a href="{{ '/gallery/' | relative_url }}">&larr; Back to gallery</a></p>
