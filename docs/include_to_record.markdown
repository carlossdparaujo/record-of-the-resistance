---
layout: page
title: Include to the project Archive listing
permalink: /include/
---

<form action="https://formspree.io/f/mgedpgaw" method="POST">
  <label for="name">What is the name of the project you want to be included?*</label><br>
  <input type="text" id="name" name="name" value="Name of project" required><br><br>
  
  <label for="link">Link to the project:*</label><br>
  <input type="text" id="link" name="link" value="https://link.org" required><br><br>
  
  <label for="location">Where is this project located?*</label><br>
  <input type="text" id="location" name="location" value="Location" required><br><br>
  
  <label for="description">Describe the project and why it should be included:*</label>
  <textarea rows="5" cols="80" id="description" name="description" required></textarea><br><br>
  
  <label for="community">Archive serves the following dissident community:*</label><br>
  <input for="community" required>
    <input type="checkbox" id="community" name="community" value="sexual">
    <label for="vehicle3">Sexual Orientation</label><br>
    <input type="checkbox" id="community" name="community" value="race">
    <label for="vehicle3">Race</label><br>
    <input type="checkbox" id="community" name="community" value="gender">
    <label for="vehicle3">Gender Identity</label><br>
    <input type="checkbox" id="community" name="community" value="ethnicity">
    <label for="vehicle3">Ethnicity</label><br>
    <input type="checkbox" id="community" name="community" value="political">
    <label for="vehicle3">Political</label><br>
    <input type="checkbox" id="community" name="community" value="other">
    <label for="vehicle3">Other</label>
  </input>
  <br><br>
  
  <label for="addcontext">Additional context:</label>
  <textarea rows="5" cols="80" id="addcontext" name="addcontext"></textarea><br><br>
  
  <input type="submit" value="Send">
</form> 
