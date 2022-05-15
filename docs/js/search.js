function doIt() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length > 0) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i]];
        appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
        appendString += '<p>' + item.summary + '</p></li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>Nenhum resultado encontrado</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var sexualCategoryFilter = getQueryVariable('category-sexual');
  var raceCategoryFilter = getQueryVariable('category-race');
  var genderCategoryFilter = getQueryVariable('category-gender');
  var ethnicityCategoryFilter = getQueryVariable('category-ethnicity');
  var politicalCategoryFilter = getQueryVariable('category-political');
  var otherCategoryFilter = getQueryVariable('category-other');
  var allFilters = [sexualCategoryFilter, raceCategoryFilter, genderCategoryFilter, ethnicityCategoryFilter, politicalCategoryFilter, otherCategoryFilter];

  console.log(allFilters);
  
  if (allFilters.length > 0) {
    var results = []
    for (var key in window.store) {
      console.log(window.store[key]);
      for (var i = 0; i < allFilters.length; i++) {
        var filter = allFilters[i]
        console.log(filter);
        if (filter && window.store[key].categories.includes(filter)) {
          console.log(key);
          results.push(key);
        }
      }
    }
    
    displaySearchResults(results, window.store); // We'll write this in the next section
  }
}

doIt();
