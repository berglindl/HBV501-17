function login(username, password){
	if(username == "User" && password =="1234"){
		window.location = "StartScreen.html";
		return true;
	}
	else{
		var errorMessage = "Wrong username or password!"
		document.getElementById("wrong").innerHTML = errorMessage;
	}
}

module.exports = {
	login
};