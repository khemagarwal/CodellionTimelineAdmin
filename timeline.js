
    var clientEmail=localStorage.getItem("clientEmail");

var db=firebase.firestore();
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


    document.getElementById("clientEmail").innerHTML = clientEmail;
    

    var docRef = db.collection("Timeline").doc(clientEmail);

docRef.get().then(function(doc) {
  if (doc.exists) {
      console.log("Document data:", doc.data());
    document.getElementById("Idea").value=doc.data().Idea;
    document.getElementById("Planning").value=doc.data().Planning;
    document.getElementById("Development").value=doc.data().Development;
    document.getElementById("Testing").value=doc.data().Testing;
    document.getElementById("Deployment").value=doc.data().Deployment;
    document.getElementById("Services").value=doc.data().Services;
    document.getElementById("currentstage").value=doc.data().CurrentStage;

  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error);
});


    
    // ...
  } else {
    // User is signed out.
    // ...
    document.getElementById("Email").innerHTML="Not Logged in";

  }
});

function storeData()
{
  db.collection("Timeline").doc(clientEmail).update({
    Idea: document.getElementById("Idea").value,
    Planning: document.getElementById("Planning").value,
    Development: document.getElementById("Development").value,
    Testing: document.getElementById("Testing").value,
    Deployment: document.getElementById("Deployment").value,
    Services: document.getElementById("Services").value,
    CurrentStage: document.getElementById("currentstage").value

  
})
.then(function() {
    console.log("Doc successful");
    alert("updated");


})
.catch(function(error) {
   console.error("Error writing doc", error);
});
}

