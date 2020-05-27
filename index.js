

var db=firebase.firestore();
 function storeData() {

  
    var Name = document.getElementById("Name").value;
    var companyName = document.getElementById("companyName").value;
    var mobileNo = document.getElementById("mobileNo").value;
    var custEmail = document.getElementById("custEmail").value;
    var password = document.getElementById("password").value;
   
   



    firebase.auth().createUserWithEmailAndPassword(custEmail, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
      });

                  // Create a reference to the file we want to download
                  var starsRef = storageRef.child('agreement/'+custEmail);

                  // Get the download URL
                  starsRef.getDownloadURL().then(function(url) {
                    // Insert url into an <img> tag to "download"
                   
                    db.collection("Customers").doc(custEmail).set({
                        Name: Name,
                        companyName: companyName,
                        mobileNo: mobileNo,
                        custEmail: custEmail,
                        url: url
             
                      
                    })
                    .then(function() {
                        console.log("Doc successful");
                        window.location.href="login.html";
             
             
                    })
                    .catch(function(error) {
                       console.error("Error writing doc", error);
                    });

                    
                    db.collection("Timeline").doc(custEmail).set({
                      Idea: '',
                      Planning: '',
                      Development: '',
                      Testing: '',
                      Deployment: '',
                      Services: ''
                  
           
                    
                  })
                  .then(function() {
                      console.log("Doc successful");
                      window.location.href="login.html";
           
           
                  })
                  .catch(function(error) {
                     console.error("Error writing doc", error);
                  });

                  }).catch(function(error) {
                  
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                      case 'storage/object-not-found':
                        // File doesn't exist
                        break;
                  
                      case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                  
                      case 'storage/canceled':
                        // User canceled the upload
                        break;
                  
                    
                  
                      case 'storage/unknown':
                        // Unknown error occurred, inspect the server response
                        break;
                    }
                  });

   


  }

  