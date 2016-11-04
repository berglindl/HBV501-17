function login(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(username == "User" && password =="1234"){
		window.location = "StartScreen.html";
		return true;
	}
	else{
		alert("Wrong username or password!");
		return false;
	}
}