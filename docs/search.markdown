---
layout: page
title: Pesquisar
permalink: /search/
---

<form action="/record-of-the-resistance/search" method="get">
  <label for="search-filters" style="font-weight: bold">Busca</label><br>
  <input type="checkbox" id="categories" name="categories" value="sexual">
  <label for="categories">Sexo disidente</label><br>
  <input type="checkbox" id="categories" name="categories" value="race">
  <label for="categories">Raça</label><br>
  <input type="checkbox" id="categories" name="categories" value="gender">
  <label for="categories">Identidade de Gênero</label><br>
  <input type="checkbox" id="categories" name="categories" value="ethnicity">
  <label for="categories">Etinia</label><br>
  <input type="checkbox" id="categories" name="categories" value="political">
  <label for="categories">Político</label><br>
  <input type="checkbox" id="categories" name="categories" value="other">
  <label for="categories">Outro</label>
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
<script src="/js/lunr.min.js"></script>
<script src="/js/search.js"></script>
