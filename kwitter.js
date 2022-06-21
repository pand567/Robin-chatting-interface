function adduser(){
    usn = document.getElementById("un").value;
    localStorage.setItem("username", usn);
    window.location = "kwitter_room.html";

}