---
layout: page # cv
permalink: /cv/
title: cv
nav: true
nav_order: 10
description: ""
subtitle: ""
# toc:
#   sidebar: left
---

<html>
  <style>
    .responsive {
      width: 100%;
      height: 0;
      padding-bottom: 56.25%;
      position: relative;
    }
    .responsive iframe {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .last-updated {
      font-size: 0.9rem;
      color: #888;
      margin-bottom: 6px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: default;
      transition: color 0.2s;
    }
    .last-updated:hover {
      color: #555;
    }
    .last-updated:hover .fa-rotate {
      animation: spin 1s linear infinite;
    }
    @keyframes spin { 100% { transform: rotate(360deg); } }
  </style>

  <div style="text-align: center; margin-bottom: 20px;">
    <div class="last-updated" title="Automatically updated on build" style="margin-bottom: 10px;">
      <i class="fa-solid fa-rotate"></i> Updated on {{ site.time | date: "%B %d, %Y" }}
    </div>
    <!-- Mobile-friendly fallback -->
    <div>
        <a href="{{ 'assets/pdf/cv_jaewon.pdf' | relative_url }}" class="btn z-depth-1" style="border: 1px solid #ddd;" target="_blank">
            <i class="fas fa-file-pdf"></i> Download/Open PDF
        </a>
    </div>
  </div>
  
  <div class="responsive">
    <iframe src="{{ 'assets/pdf/cv_jaewon.pdf' | relative_url }}" width="750" height="650"></iframe>
  </div>
</html>