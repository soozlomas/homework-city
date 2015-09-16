$(document).ready(function(){

  var cityImages = ['images/nyc.jpg','images/sf.jpg','images/la.jpg','images/sydney.jpg','images/austin.jpg'];

  // declare a function to change the image depending on the user's input
  function changeImage(){

    /* collect city name that user inputs and store in city
    changes the user's input to lowercase so the case actually entered doesn't matter
    trims extra spaces that the user inputs*/
    var city = $('#city-type').val().toLowerCase().trim();

    if(city === 'new york' || city === 'new york city' || city === 'nyc'){
      //need the plus signs to concatenate the url, the array index, and the brackets
      $('body').css('background', 'url(' + cityImages[0] + ')');
    }
    else if (city === 'san francisco' || city === 'sf' || city === 'bay area'){
      $('body').css('background', 'url(' + cityImages[1] + ')');
    }
    else if (city === 'los angeles' || city === 'la' || city === 'lax'){
      $('body').css('background', 'url(' + cityImages[2] + ')');
    }
    else if (city === 'austin' || city === 'atx'){
      $('body').css('background', 'url(' + cityImages[3] + ')');
    }
    else if (city === 'sydney' || city === 'syd'){
      $('body').css('background', 'url(' + cityImages[4] + ')');
    }

    // returns the input field to blank
    $('#city-type').val('');

    return false;

  }

  // create click handler for button
  $('#submit-btn').click(changeImage);

});
