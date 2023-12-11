
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBqoJnIF4CK_iQU6ZmX0bcx0vtwtVm_SRQ",
      authDomain: "lets-chat-web-app-p.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-p-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-p",
      storageBucket: "lets-chat-web-app-p.appspot.com",
      messagingSenderId: "390207541769",
      appId: "1:390207541769:web:72eb0bfac005bd020c9ed8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function getData() {firebase.database().ref("/").on('value', 
    function(snapshot) {document.getElementById("output").innerHTML = 
    "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
user_name = document.getElementById("user_name").value;

localStorage.setItem("addRoom", addRoom);

window.location = "lets_Chat_room.html";
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "let_chat_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kiwtter_page.html";
}

function logout()  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send()
{
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}