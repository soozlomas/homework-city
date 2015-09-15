$(document).ready(function(){

  var cityImages = ['images/nyc.jpg','images/sf.jpg','images/la.jpg','images/sydney.jpg','images/austin.jpg','images/citpix_skyline.jpg'];
console.log('clicked 0');

// declare a function to change the image depending on the user's input
  function changeImage(){
console.log('clicked 1');

// collect city name that user inputs and store in city
    var city = $('#city-type').val();
console.log('clicked 2');

//changes the user's input to lowercase so the case actually entered doesn't matter
    city = city.toLowerCase();

    if(city === 'new york' || city === 'new york city' || city === 'nyc'){
      $('body').css('background', cityImages[0]);
    }
    else if (city === 'san francisco' || city === 'sf' || city === 'bay area'){
      $('body').css('background','url(images/sf.jpg)');
    }
    else if (city === 'los angeles' || city === 'la' || city === 'lax'){
      $('body').css('background','url(images/la.jpg)');
    }
    else if (city === 'austin' || city === 'atx'){
      $('body').css('background','url(images/austin.jpg)');
    }
    else if (city === 'sydney' || city === 'syd'){
      $('body').css('background','url(images/sydney.jpg)');
    }
console.log('clicked 3');

// returns the input field to blank
    $('#city-type').val('');

// stop the browser autmatically refereshing the page
    return false;
  }

// create click handler for button
    $('#submit-btn').click(changeImage); //is changeimage here a callback function?
  console.log('clicked 5');

});
