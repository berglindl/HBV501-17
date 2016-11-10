function loginU(username){
	if(username == "User"){
		return username;
	}
}

function loginP(password){
	if(password == "1234"){
		return password;
	}
}

function wrongUorP(wrong){
	var message = "Wrong username or password!";
	return message;
}

module.exports = {
	loginU,
	loginP,
	wrongUorP,
};