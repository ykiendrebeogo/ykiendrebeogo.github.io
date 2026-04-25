---
layout: page
permalink: /gallery/
title: gallery
description: "Photo gallery from CADI Lab milestones: student awards, lab events, conferences, and visiting talks."
nav: false
nav_order: 9
display_categories: [awards, events, conferences, talks]
horizontal: false
---

> A growing photo log of milestones from the <a href="https://cadi-lab.github.io" target="_blank" style="font-weight: bold;">CADI Lab</a>. Each card opens a dedicated page for that event.
{:.research-question}

<div class="projects">
{% if page.display_categories %}
  {% for category in page.display_categories %}
    {% assign categorized_events = site.gallery_events | where: "category", category %}
    {% if categorized_events.size > 0 %}
      <a id="{{ category }}" href=".#{{ category }}">
        <h2 class="category">{{ category }}</h2>
      </a>
      {% assign sorted_events = categorized_events | sort: "date" | reverse %}
      <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_events %}
        {% include projects.liquid %}
      {% endfor %}
      </div>
    {% endif %}
  {% endfor %}
{% else %}
  {% assign sorted_events = site.gallery_events | sort: "date" | reverse %}
  <div class="row row-cols-1 row-cols-md-3">
  {% for project in sorted_events %}
    {% include projects.liquid %}
  {% endfor %}
  </div>
{% endif %}
</div>
