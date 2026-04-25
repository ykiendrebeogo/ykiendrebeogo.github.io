---
layout: page
title: "2025 Best Master's Thesis Award"
date: 2026-04-24
category: awards
tags: [zhan-yi-liao, thesis-award, cmct-2026, nycu]
description: "Zhan-Yi Liao (M.S., NYCU; co-advised with Po-An Chen) recognized by the Algorithms and Computation Theory Society of Taiwan, presented at CMCT 2026."
img: assets/img/gallery/zhanyi-2025-cmct/02.jpg
importance: 1
images:
  photoswipe: true
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
  /* Thumbnails crop via overflow on the wrapper. Click opens the original
     in a PhotoSwipe overlay (X, Esc, or outside-click to close). The full
     image is fetched at native resolution with aspect ratio preserved. */
  .gallery-event-thumb {
    display: block;
    height: 240px;
    overflow: hidden;
    border-radius: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: zoom-in;
  }
  .gallery-event-thumb:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  .gallery-event-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
</style>

{% comment %}Map filename to natural pixel dimensions for PhotoSwipe.{% endcomment %}
{% assign dims = "" | split: "" %}
{% assign dims = dims | push: "01.jpg|5712|4284" | push: "02.jpg|4032|3024" | push: "03.jpg|4032|3024" | push: "04.jpg|4032|3024" | push: "05.jpg|1108|1477" %}

{% if event_photos.size > 0 %}
<div class="row mt-4 pswp-gallery" id="pswp-zhanyi">
{% for photo in event_photos %}
    {% assign w = 0 %}{% assign h = 0 %}
    {% for d in dims %}
        {% assign parts = d | split: "|" %}
        {% if photo.name == parts[0] %}
            {% assign w = parts[1] %}{% assign h = parts[2] %}
        {% endif %}
    {% endfor %}
    <div class="col-sm-4 mt-3 mt-md-0">
        <a href="{{ photo.path | relative_url }}" data-pswp-width="{{ w }}" data-pswp-height="{{ h }}" target="_blank" rel="noopener" class="gallery-event-thumb">
            <img src="{{ photo.path | relative_url }}" alt="2025 Best Master's Thesis Award: Zhan-Yi Liao" loading="lazy">
        </a>
    </div>
{% endfor %}
</div>
<div class="caption">
    From the CMCT 2026 award ceremony. Click any photo to enlarge; press <kbd>Esc</kbd> or click outside to close.
</div>
{% endif %}

<p class="mt-4"><a href="{{ '/gallery/' | relative_url }}">&larr; Back to gallery</a></p>
