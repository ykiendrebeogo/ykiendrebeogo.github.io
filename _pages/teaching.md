---
layout: page
permalink: /teaching/
title: teaching
description: # Materials for courses you taught. Replace this text with your description.
nav: true
nav_order: 6
---


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
          <a href="{{ course.url | relative_url }}" class="btn btn-outline-primary btn-sm stretched-link">View Course</a>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
