//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBpqFPd3VD1Xx9ivHnw67itrbMwOG3AiOI",
    authDomain: "practice2-c53ad.firebaseapp.com",
    databaseURL: "https://practice2-c53ad-default-rtdb.firebaseio.com",
    projectId: "practice2-c53ad",
    storageBucket: "practice2-c53ad.appspot.com",
    messagingSenderId: "536997611706",
    appId: "1:536997611706:web:5cdf53aae75e0d73535a83"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
