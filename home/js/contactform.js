
var config = {
  apiKey: "AIzaSyCujbdbKkdYnk_rBE8uuu7tuKCs1qoPkYk",
  authDomain: "hiddb-30b33.firebaseapp.com",
  databaseURL: "https://hiddb-30b33-default-rtdb.firebaseio.com",
  projectId: "hiddb-30b33",
  storageBucket: "hiddb-30b33.appspot.com",
  messagingSenderId: "83892461212",
  appId: "1:83892461212:web:eeafd62eb886b10fb01759",
  measurementId: "G-ZYE0BGTCC7"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    first_name: name,
    second_name:company,
    email:email,
    message:message
  });
}