---
layout: page
title: Pesquisar
permalink: /search/
---

<form action="/search.html" method="get">
  <label for="search-filters" style="font-weight: bold">Busca</label><br>
  <input type="checkbox" id="sexual_community" name="sexual_community" value="sexual">
  <label for="sexual_community">Sexo disidente</label><br>
  <input type="checkbox" id="race_community" name="race_community" value="race">
  <label for="race_community">Raça</label><br>
  <input type="checkbox" id="gender_community" name="gender_community" value="gender">
  <label for="gender_community">Identidade de Gênero</label><br>
  <input type="checkbox" id="ethnicity_community" name="ethnicity_community" value="ethnicity">
  <label for="ethnicity_community">Etinia</label><br>
  <input type="checkbox" id="political_community" name="political_community" value="political">
  <label for="political_community">Político</label><br>
  <input type="checkbox" id="other_community" name="other_community" value="other">
  <label for="other_community">Outro</label>
  <input type="submit" value="search">
</form>

<ul id="search-results"></ul>

<script>
  window.store = {
    {% for post in site.posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "categories": "{{ post.categories | xml_escape }}",
        "summary": "{{ post.summary | xml_escape }}",
        "url": "{{ post.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>
