---
layout: page
title: talks
permalink: /talks/
description: List of invited talks and academic conference presentations.
nav: true
nav_order: 7
---



<!-- Talks List -->
<div class="publications">
{% assign talks_by_year = site.data.talks | group_by: 'year' | sort: 'name' | reverse %}
{% for year_group in talks_by_year %}
  <h2 class="year">{{ year_group.name }}</h2>
  <ul class="talks-list">
    {% for talk in year_group.items %}
      <li class="mb-3">
        <div class="periodical">
            {% if talk.type %}
              {% if talk.type contains "invited" or talk.type contains "Invited" %}
                Invited talk on "{{ talk.title }}" at {{ talk.venue }}
              {% else %}
               {{ talk.type }} on "{{ talk.title }}" at {{ talk.venue }}
              {% endif %}
            {% else %}
              "{{ talk.title }}", {{ talk.venue }}
            {% endif %}

          {% if talk.date %}
            , {{ talk.date | date: "%B %d, %Y" }}.
          {% endif %}
        </div>
        {% if talk.note %}
          <div class="periodical">
            <em>Note: <span {% if talk.highlight_note %}style="color: var(--global-theme-color); font-weight: 500;"{% endif %}>{{ talk.note }}</span></em>
          </div>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
{% endfor %}
</div>
