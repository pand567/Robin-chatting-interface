//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAq94K7llRrl86iAFA0DpiJQ8xj9mkGGBc",
      authDomain: "kwitternetwork.firebaseapp.com",
      databaseURL: "https://kwitternetwork-default-rtdb.firebaseio.com",
      projectId: "kwitternetwork",
      storageBucket: "kwitternetwork.appspot.com",
      messagingSenderId: "1035446535212",
      appId: "1:1035446535212:web:940763808d899528573d89"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
roomname = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value ;
      firebase.database().ref(roomname).push({
            name: username,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}