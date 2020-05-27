

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

      
      document.getElementById("Email").innerHTML=email;

      
      // ...
    } else {
      // User is signed out.
      // ...
      document.getElementById("Email").innerHTML="Not Logged in";

    }
  });

 function signout()
 {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        document.getElementById("Email").innerHTML="Not Logged in";

      }).catch(function(error) {
        // An error happened.
      document.getElementById("Email").innerHTML="Error";

      });
 }