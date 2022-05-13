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
  <input type="checkbox" id="sexual_community" name="sexual_community" value="sexual">
  <label for="sexual_community">Sexual Orientation</label><br>
  <input type="checkbox" id="race_community" name="race_community" value="race">
  <label for="race_community">Race</label><br>
  <input type="checkbox" id="gender_community" name="gender_community" value="gender">
  <label for="gender_community">Gender Identity</label><br>
  <input type="checkbox" id="ethnicity_community" name="ethnicity_community" value="ethnicity">
  <label for="ethnicity_community">Ethnicity</label><br>
  <input type="checkbox" id="political_community" name="political_community" value="political">
  <label for="political_community">Political</label><br>
  <input type="checkbox" id="other_community" name="other_community" value="other">
  <label for="other_community">Other</label>
  <br><br>
  
  <label for="addcontext">Additional context:</label>
  <textarea rows="5" cols="80" id="addcontext" name="addcontext"></textarea><br><br>
  
  <input type="submit" value="Send">
</form> 
