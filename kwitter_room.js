
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class='room_name id="+Room_names+" onclick='redirecttoroomname()this.id' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

username = localStorage.getItem("username");
document.getElementById("usnm").innerHTML="Welcome" + username + "!";

function addroom(){
      roomname = document.getElementById("rn").value ;
      firebase.database().ref("/").child(roomname).update({
            purpose : "adding a room name"});
            localStorage.setItem("room_name", roomname);
            window.location = "kwitter_page.html";
}

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.Location = "index.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


