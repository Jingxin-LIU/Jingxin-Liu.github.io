---
layout: default
title: Publications
---

# Publications

A selection of representative publications from my research program. For a complete list, please refer to [Google Scholar](https://scholar.google.com/citations?user=YOUR_ID) or [ORCID](https://orcid.org/0000-0001-XXXX-XXXX).

---

## By Year

{% for year in site.data.publication_years %}
### {{ year }}

{% assign pubs = site.publications | where: "year", year | sort: "date" | reverse %}

{% for pub in pubs %}
<div class="pub-item">
  <div class="pub-title">{{ pub.title }}</div>
  <div class="pub-authors">{{ pub.authors }}</div>
  <div class="pub-venue">{{ pub.venue }}</div>
  {% if pub.doi %}
  <div class="pub-doi">DOI: <a href="https://doi.org/{{ pub.doi }}" target="_blank">{{ pub.doi }}</a></div>
  {% endif %}
  {% if pub.links %}
  <div class="pub-links">
    {% for link in pub.links %}
    <a href="{{ link.url }}" target="_blank">{{ link.label }}</a>
    {% endfor %}
  </div>
  {% endif %}
</div>
{% endfor %}

{% endfor %}

---

## By Topic

### Artificial Intelligence & Deep Learning

{% assign ai_pubs = site.publications | where: "category", "AI" | sort: "year" | reverse %}
{% for pub in ai_pubs %}
- **{{ pub.title }}** — {{ pub.authors }} ({{ pub.year }})
  - *{{ pub.venue }}*
  {% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" target="_blank">DOI: {{ pub.doi }}</a>{% endif %}
{% endfor %}

### Computational Pathology

{% assign path_pubs = site.publications | where: "category", "Pathology" | sort: "year" | reverse %}
{% for pub in path_pubs %}
- **{{ pub.title }}** — {{ pub.authors }} ({{ pub.year }})
  - *{{ pub.venue }}*
  {% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" target="_blank">DOI: {{ pub.doi }}</a>{% endif %}
{% endfor %}

### Medical Image Analysis

{% assign mia_pubs = site.publications | where: "category", "MIA" | sort: "year" | reverse %}
{% for pub in mia_pubs %}
- **{{ pub.title }}** — {{ pub.authors }} ({{ pub.year }})
  - *{{ pub.venue }}*
  {% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" target="_blank">DOI: {{ pub.doi }}</a>{% endif %}
{% endfor %}

---

## Most Cited Works

{% assign top_cited = site.publications | sort: "citations" | reverse | limit: 5 %}
{% for pub in top_cited %}
- **{{ pub.title }}** ({{ pub.citations }} citations)
  - {{ pub.authors }} — {{ pub.venue }} ({{ pub.year }})
{% endfor %}

---

## Note

Publication data is maintained separately. To add or update publications, modify the data files in the `_publications` folder or the data directory.
