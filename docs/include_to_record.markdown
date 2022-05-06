---
layout: page
title: Include to Record
permalink: /include/
---

<form action="">
  <label for="name">What is the name of the project you want to be included?*</label><br>
  <input type="text" id="name" name="name" value="Name of project"><br><br>
  
  <label for="link">Link to the project:*</label><br>
  <input type="text" id="link" name="link" value="https://link.org"><br><br>
  
  <label for="location">Where is this project located?*</label><br>
  <input type="text" id="location" name="location" value="Location"><br><br>
  
  <label for="description">Describe the project and why it should be included in the Record:*</label><br>
  <input type="text" id="description" name="description" value="Description"><br><br>
  
  <label for="community">Archive serves the following dissident community:*</label><br>
  <select id="community" name="community">
    <option value="sexual">Sexual Orientation</option>
    <option value="race">Race</option>
    <option value="gender">Gender Identity</option>
    <option value="ethnicity">Ethnicity</option>
    <option value="political">Political Alignment</option>
    <option value="other">Other</option>
  </select><br><br>
  
  <label for="addcontext">Additional context</label><br>
  <input type="text" id="addcontext" name="addcontext" value="Context"><br><br>
  
  <input type="submit" value="Send">
</form> 
