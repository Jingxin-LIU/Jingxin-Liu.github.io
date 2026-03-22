---
layout: default
title: Home
---

# Welcome

I am an Associate Professor at [Your University] with research interests in **Artificial Intelligence** and **Computational Pathology**. My work focuses on developing machine learning algorithms for medical image analysis, particularly in digital pathology and cancer diagnostics.

## Research Highlights

- **Machine Learning in Pathology**: Developing deep learning models for automated histopathological image analysis
- **Computational Pathology**: Creating computational frameworks for cancer detection and classification
- **AI Applications**: Applying artificial intelligence to improve diagnostic accuracy and clinical workflow efficiency

## Featured Projects

{% assign projects = site.projects | where_exp: "item", "item.featured == true" | sort: "date" | reverse | limit: 3 %}
{% if projects.size > 0 %}
<div>
  {% for project in projects %}
  <div class="project-item">
    <h3>{{ project.title }}</h3>
    <p>{{ project.excerpt }}</p>
    <a href="{{ project.url | relative_url }}">Learn more →</a>
  </div>
  {% endfor %}
</div>
{% else %}
<p><em>Recent projects will be displayed here.</em></p>
{% endif %}

## Recent Publications

{% assign publications = site.publications | sort: "date" | reverse | limit: 5 %}
{% if publications.size > 0 %}
<div>
  {% for pub in publications %}
  <div class="pub-item">
    <div class="pub-title">{{ pub.title }}</div>
    <div class="pub-authors">{{ pub.authors }}</div>
    <div class="pub-venue">{{ pub.venue }}</div>
    {% if pub.links %}
    <div class="pub-links">
      {% for link in pub.links %}
      <a href="{{ link.url }}" target="_blank">{{ link.label }}</a>
      {% endfor %}
    </div>
    {% endif %}
  </div>
  {% endfor %}
</div>
{% else %}
<p><em>Publications will be listed here.</em></p>
{% endif %}

---

**Quick Links**: [About Me]({{ '/about.html' | relative_url }}) • [Research]({{ '/research.html' | relative_url }}) • [CV]({{ '/cv.html' | relative_url }}) • [Contact]({{ '/contact.html' | relative_url }})
