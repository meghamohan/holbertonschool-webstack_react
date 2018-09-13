const $ = require('jquery');

$(document).ready(function() {
  $("h1").text('Holberton School');
  setInterval(toggleText, 2000);
  function toggleText() {
    if ($('h1').text() == "Holberton School") {
      $('h1').text('HBNB');
    } else {
      $('h1').text('Holberton School');
    }
  };
});
