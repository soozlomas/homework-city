$(document).ready(function(){

  var cityImages = ['images/nyc.jpg','images/sf.jpg','images/la.jpg','images/sydney.jpg','images/austin.jpg'];
  console.log('clicked 0');

  // declare a function to change the image depending on the user's input
  function changeImage(){
  console.log('clicked 1');

    /* collect city name that user inputs and store in city
    changes the user's input to lowercase so the case actually entered doesn't matter
    trims extra spaces that the user inputs*/
    var city = $('#city-type').val().toLowerCase().trim();
    console.log('clicked 2');

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
    console.log('clicked 3');

    // returns the input field to blank
    $('#city-type').val('');

    // it doesn't work without this but i don't know why
    return false;

  }

  // create click handler for button
  $('#submit-btn').click(changeImage);
  console.log('clicked 4');

});
