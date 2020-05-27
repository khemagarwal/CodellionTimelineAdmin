

var db=firebase.firestore();
function login() {

 
  
   var custEmail = document.getElementById("custEmail").value;
   var password = document.getElementById("password").value;

   firebase.auth().signInWithEmailAndPassword(custEmail, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

      window.location.href="dashboard.html";

      
      // ...
    } else {
      // User is signed out.
      // ...
      document.getElementById("Email").innerHTML="Not Logged in";

    }
  });

 }