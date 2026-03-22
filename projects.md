---
layout: default
title: Projects
---

# Projects

## Active Research Projects

{% if site.projects.size > 0 %}

{% assign featured = site.projects | where: "featured", true | sort: "date" | reverse %}
{% if featured.size > 0 %}

### Featured Projects

{% for project in featured %}
<div class="project-item">
  <h3>{{ project.title }}</h3>
  <p>{{ project.description }}</p>
  
  {% if project.funding %}
  <p><strong>Funding:</strong> {{ project.funding }}</p>
  {% endif %}
  
  {% if project.collaborators %}
  <p><strong>Collaborators:</strong> {{ project.collaborators }}</p>
  {% endif %}
  
  {% if project.tags %}
  <div class="tags">
    {% for tag in project.tags %}
    <span class="tag">{{ tag }}</span>
    {% endfor %}
  </div>
  {% endif %}
  
  {% if project.url %}
  <p><a href="{{ project.url | relative_url }}">View Project Details →</a></p>
  {% endif %}
</div>
{% endfor %}

{% endif %}

### All Projects

<table>
<thead>
  <tr>
    <th>Project</th>
    <th>Focus Area</th>
    <th>Status</th>
    <th>Year</th>
  </tr>
</thead>
<tbody>
  {% for project in site.projects | sort: "date" | reverse %}
  <tr>
    <td>
      {% if project.url %}
      <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      {% else %}
      {{ project.title }}
      {% endif %}
    </td>
    <td>{{ project.focus_area }}</td>
    <td>{{ project.status | default: "Active" }}</td>
    <td>{{ project.date | date: "%Y" }}</td>
  </tr>
  {% endfor %}
</tbody>
</table>

{% else %}

<p><em>Project descriptions will be added soon.</em></p>

{% endif %}

---

## Project Categories

### Artificial Intelligence & Machine Learning
Research focused on developing novel deep learning architectures and training methodologies for medical image analysis.

### Digital Pathology
Projects dedicated to whole slide image analysis, tissue segmentation, and automated tumor identification.

### Clinical Applications
Applied research translating computational methods into clinical diagnostic systems and workflow optimization.

### Fundamental Methodology
Research on model robustness, domain adaptation, and interpretability in AI systems.

---

## How to Get Involved

If you are interested in joining our research group or collaborating on projects:

- **Graduate Students**: We welcome motivated graduate students with interests in machine learning, pathology, or medical imaging. Please see the [About]({{ '/about.html' | relative_url }}) page for current opportunities.

- **Postdoctoral Researchers**: We have multiple postdoctoral positions available. Please contact us with your CV and research interests.

- **Collaborators**: We actively seek collaborations with clinical partners, industry, and other research groups. Please reach out to discuss potential collaborations.
