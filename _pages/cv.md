---
layout: page # cv
permalink: /cv/
title: cv
nav: true
nav_order: 10
description: ""
subtitle: "Automatically generated from [website content](https://j1yoo.github.io) via [Jekyll](https://jekyllrb.com/), [Puppeteer](https://pptr.dev/), and [GitHub Actions](https://github.com/features/actions)."
# toc:
#   sidebar: left
---

<html>
  <style>
    .responsive {
      width: 100%;
      height: 0;
      padding-bottom: 129%; /* A4 aspect ratio (297/210) */
      position: relative;
    }
    .responsive iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    /* Mobile: hide iframe, show message */
    @media (max-width: 768px) {
      .responsive {
        display: none;
      }
      .cv-mobile-message {
        display: block;
        text-align: center;
        padding: 40px 20px;
        background: var(--global-bg-color, #f8f9fa);
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-top: 10px;
      }
      .cv-mobile-message p {
        color: #666;
        margin: 0;
        font-size: 0.95rem;
      }
    }
    @media (min-width: 769px) {
      .cv-mobile-message {
        display: none;
      }
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

    /* Custom Theme Button to match al-folio bibliography style */
    .btn-theme {
      color: var(--global-text-color);
      border: 1px solid var(--global-text-color);
      background-color: transparent;
      text-decoration: none;
      transition: all 0.2s ease-in-out;
    }
    .btn-theme:hover {
      color: var(--global-theme-color) !important;
      border-color: var(--global-theme-color) !important;
      text-decoration: none;
    }
    .btn-theme:focus {
      box-shadow: none;
    }
  </style>

  <div style="text-align: center; margin-bottom: 20px;">
    <div class="last-updated" title="Automatically updated on build" style="margin-bottom: 10px;">
      <i class="fa-solid fa-rotate"></i> Updated on {{ site.time | date: "%B %d, %Y" }}
    </div>
    <div>
        <a href="{{ 'assets/pdf/cv_jaewon.pdf' | relative_url }}" class="btn btn-theme z-depth-0" target="_blank">
            <i class="fas fa-file-pdf"></i> Download/Open PDF
        </a>
    </div>
  </div>

  <!-- Desktop: Interactive PDF iframe -->
  <div class="responsive">
    <iframe src="{{ 'assets/pdf/cv_jaewon.pdf' | relative_url }}"></iframe>
  </div>

  <!-- Mobile: Clean message instead of broken iframe -->
  <div class="cv-mobile-message">
    <p><i class="fas fa-mobile-alt"></i> Use the button above to view the full CV on mobile devices.</p>
  </div>
</html>