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
    /* Desktop: show iframe, hide preview */
    .cv-iframe-container {
      width: 100%;
      height: 85vh;
      min-height: 600px;
    }
    .cv-iframe-container iframe {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .cv-mobile-preview {
      display: none;
    }

    /* Mobile: hide iframe, show preview */
    @media (max-width: 768px) {
      .cv-iframe-container {
        display: none;
      }
      .cv-mobile-preview {
        display: block;
        text-align: center;
      }
      .cv-mobile-preview img {
        max-width: 100%;
        height: auto;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .cv-mobile-notice {
        font-size: 0.85rem;
        color: #666;
        margin-top: 12px;
        font-style: italic;
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
  <div class="cv-iframe-container">
    <iframe src="{{ 'assets/pdf/cv_jaewon.pdf' | relative_url }}"></iframe>
  </div>

  <!-- Mobile: Image preview -->
  <div class="cv-mobile-preview">
    <a href="{{ 'assets/pdf/cv_jaewon.pdf' | relative_url }}" target="_blank">
      <img src="{{ 'assets/pdf/cv_preview.png' | relative_url }}" alt="CV Preview - Tap to open full PDF">
    </a>
    <p class="cv-mobile-notice">Tap the image or button above to view the full CV</p>
  </div>
</html>