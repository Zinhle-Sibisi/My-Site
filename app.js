// This function changes the text color of the h1 element when clicked
function changeTextColor() {
    var h1 = document.querySelector('h1');
    h1.style.color = 'red';
  }
  
  // This function displays an alert when the user submits a form
  function onSubmit() {
    alert('Thank you for your submission! we will get back to you soon!!');
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

  const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission to server
  
  const formData = new FormData(form); // Get form data
  
  // Validate form data before sending
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Please fill in all required fields.');
    return;
  }

  // Send form data to server via AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/contact-form-handler');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Your message has been sent! We will get back to you soon.');
      form.reset(); // Clear form inputs
    } else {
      alert('There was an error sending your message. Please try again later.');
    }
  };
  xhr.send(JSON.stringify(Object.fromEntries(formData))); // Convert form data to JSON
});


  
