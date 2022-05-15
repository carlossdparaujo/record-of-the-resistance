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
      searchResults.innerHTML = '<li>No results found</li>';
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

  // category filter only
  var searchTerm = getQueryVariable('categories');

  if (searchTerm) {
    var results = []
    for (var key in window.store) { // Add the data to lunr
      if (window.store[key].categories.includes(searchTerm)) {
        results.push(key);
      }
    }
    
    displaySearchResults(results, window.store); // We'll write this in the next section
  }
}

doIt();
