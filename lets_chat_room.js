
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBqoJnIF4CK_iQU6ZmX0bcx0vtwtVm_SRQ",
  authDomain: "lets-chat-web-app-p.firebaseapp.com",
  projectId: "lets-chat-web-app-p",
  storageBucket: "lets-chat-web-app-p.appspot.com",
  messagingSenderId: "390207541769",
  appId: "1:390207541769:web:d797e8ff1f4778580c9ed8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addRoom(){
user_name = document.getElementById("user_name").value;

localStorage.setItem("addRoom", addRoom);

window.location = "lets_Chat_room.html";
}