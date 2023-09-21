function logout(){
    firebase.auth().signOut()
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Thanks For Visiting"

    }
})


  var userAgent;

  (function() {

    userAgent = navigator.userAgent.toLowerCase();

    if (typeof orientation !== 'undefined' || userAgent.indexOf('mobile') >= 0); {
      alert('open in desktop');
    } else {
      document.body.innerHTML = 'your HTML as a string here';
    }

  })();






