---
layout: page
permalink: /teaching/
title: teaching
description: # Materials for courses you taught. Replace this text with your description.
nav: true
nav_order: 6
---


<style>
  .btn-theme {
    color: var(--global-text-color) !important;
    border: 1px solid var(--global-text-color) !important;
    background-color: transparent !important;
  }
  .btn-theme:hover {
    color: var(--global-theme-color) !important;
    border-color: var(--global-theme-color) !important;
    background-color: transparent !important;
    box-shadow: none !important;
    text-decoration: none !important;
  }
  .card-title a {
    color: var(--global-text-color) !important;
  }
  .card-title a:hover {
    color: var(--global-theme-color) !important;
    text-decoration: none;
  }
</style>

<!-- Dynamic Course Grid -->
<div class="row row-cols-1 row-cols-md-2">
  {% for course in site.teaching %}
    <div class="col mb-4">
      <div class="card h-100 shadow-sm border-0">
        <div class="card-body">
          <h4 class="card-title">
            <a href="{{ course.url | relative_url }}">{{ course.title }}</a>
          </h4>
          <p class="card-text text-muted">{{ course.description }}</p>
          <a href="{{ course.url | relative_url }}" class="btn btn-outline-secondary btn-sm stretched-link btn-theme">View Course</a>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<hr>

<h3>Class Photos</h3>
<div id="teachingPhotoCarousel" class="carousel slide mt-3 shadow-sm rounded" data-ride="carousel">
  <div class="carousel-inner rounded">
    <!-- 2025 Photos -->
    <div class="carousel-item active">
      <img src="/assets/img/teaching_photos/20251218_162714-1400.webp" class="d-block w-100" alt="Class Photo 2025" style="max-height: 600px; object-fit: contain; background: #333;">
    </div>
    <div class="carousel-item">
      <img src="/assets/img/teaching_photos/20251218_162716-1400.webp" class="d-block w-100" alt="Class Photo 2025" style="max-height: 600px; object-fit: contain; background: #333;">
    </div>
    <div class="carousel-item">
      <img src="/assets/img/teaching_photos/20251218_162717-1400.webp" class="d-block w-100" alt="Class Photo 2025" style="max-height: 600px; object-fit: contain; background: #333;">
    </div>
    <div class="carousel-item">
      <img src="/assets/img/teaching_photos/20251218_162718-1400.webp" class="d-block w-100" alt="Class Photo 2025" style="max-height: 600px; object-fit: contain; background: #333;">
    </div>
    <div class="carousel-item">
      <img src="/assets/img/teaching_photos/20251218_162720-1400.webp" class="d-block w-100" alt="Class Photo 2025" style="max-height: 600px; object-fit: contain; background: #333;">
    </div>
    <div class="carousel-item">
      <img src="/assets/img/teaching_photos/20251218_162721-1400.webp" class="d-block w-100" alt="Class Photo 2025" style="max-height: 600px; object-fit: contain; background: #333;">
    </div>
    <div class="carousel-item">
      <img src="/assets/img/teaching_photos/20251218_162722-1400.webp" class="d-block w-100" alt="Class Photo 2025" style="max-height: 600px; object-fit: contain; background: #333;">
    </div>

    <!-- 2024 Photos -->
    <div class="carousel-item">
      <img src="/assets/img/teaching_photos/PXL_20241219_083528513-1400.webp" class="d-block w-100" alt="Class Photo 2024" style="max-height: 600px; object-fit: contain; background: #333;">
    </div>
    <div class="carousel-item">
      <img src="/assets/img/teaching_photos/20240604_160044-1400.webp" class="d-block w-100" alt="Class Photo 2024" style="max-height: 600px; object-fit: contain; background: #333;">
    </div>

    <!-- Older Photos -->
    <div class="carousel-item">
      <img src="/assets/img/teaching_photos/PXL_20230615_062409352-1400.webp" class="d-block w-100" alt="Class Photo 2023" style="max-height: 600px; object-fit: contain; background: #333;">
    </div>
    <div class="carousel-item">
      <img src="/assets/img/teaching_photos/PXL_20220106_071147725.MP-1400.webp" class="d-block w-100" alt="Class Photo 2022" style="max-height: 600px; object-fit: contain; background: #333;">
    </div>
    <div class="carousel-item">
      <img src="/assets/img/teaching_photos/IMG_0993-1400.webp" class="d-block w-100" alt="Class Photo" style="max-height: 600px; object-fit: contain; background: #333;">
    </div>
    <div class="carousel-item">
      <img src="/assets/img/teaching_photos/IMG_1068-1400.webp" class="d-block w-100" alt="Class Photo" style="max-height: 600px; object-fit: contain; background: #333;">
    </div>
    <div class="carousel-item">
      <img src="/assets/img/teaching_photos/IMG_1070-1400.webp" class="d-block w-100" alt="Class Photo" style="max-height: 600px; object-fit: contain; background: #333;">
    </div>
    <div class="carousel-item">
      <img src="/assets/img/teaching_photos/IMG_1072-1400.webp" class="d-block w-100" alt="Class Photo" style="max-height: 600px; object-fit: contain; background: #333;">
    </div>
  </div>

  <a class="carousel-control-prev" href="#teachingPhotoCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#teachingPhotoCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
