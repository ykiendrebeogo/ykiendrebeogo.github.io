---
layout: cv_clean
permalink: /cv_print/
title: curriculum vitae
nav: false
---


### Manuscripts Under Review
{% bibliography --query @*[kind=manuscripts under review] --template bib_clean %}

### Working Papers
{% bibliography --query @*[kind=working papers] --template bib_clean %}

### Publications
{% bibliography --query @*[kind=publications] --template bib_clean %}
