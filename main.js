function addUser(){
    user_name = document.getElementById("User_Name").value
    localStorage.setItem("user_name",user_name)
    window.location = "Lets_go_friends_app_room.html"
}