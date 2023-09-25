
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBDLJ26e5vwhpPZO8Bh_Xsqshv93WAZ4d8",
      authDomain: "kwitter-30d74.firebaseapp.com",
      databaseURL: "https://kwitter-30d74-default-rtdb.firebaseio.com",
      projectId: "kwitter-30d74",
      storageBucket: "kwitter-30d74.appspot.com",
      messagingSenderId: "1061355392227",
      appId: "1:1061355392227:web:19cefe7e30e67a8f52c9d6"
    };
    
    // Initialize Firebase
     firebase.nitializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
