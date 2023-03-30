// This function changes the text color of the h1 element when clicked
function changeTextColor() {
    var h1 = document.querySelector('h1');
    h1.style.color = 'red';
  }
  
  // This function displays an alert when the user submits a form
  function onSubmit() {
    alert('Thank you for your submission!');
  }
  
  // This function toggles the visibility of a div element
  function toggleDiv() {
    var div = document.getElementById('myDiv');
    if (div.style.display === 'none') {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  }
  
  // This code adds event listeners to elements on the page
  document.addEventListener('DOMContentLoaded', function() {
    var h1 = document.querySelector('h1');
    h1.addEventListener('click', changeTextColor);
  
    var form = document.querySelector('form');
    form.addEventListener('submit', onSubmit);
  
    var button = document.querySelector('button');
    button.addEventListener('click', toggleDiv);
  });

  

  