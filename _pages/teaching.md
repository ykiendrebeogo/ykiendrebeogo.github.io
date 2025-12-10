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
