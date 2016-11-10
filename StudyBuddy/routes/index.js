var express = require('express');
var router = express.Router();
var logIn = require('./Login');

/* GET login screen */
router.get('/', (req, res) => {
	res.render('LoginScreen');
});

/* POST login screen */
router.post('/', (req, res) => {
	var usernameFromInput = req.body.username;
	var passwordFromInput = req.body.password;
	var wrongInput = req.body.wrong;
	var username = logIn.loginU(usernameFromInput);
	var password = logIn.loginP(passwordFromInput);
	var wrong = logIn.wrongUorP(wrongInput);
	console.log("username", username);
	console.log("password", password);
	if(username === "User" && password === "1234"){
		res.render('StartScreen', {username, password});
	}
	else{
		res.render('LoginScreen', {wrong});
	}
});

/* GET start screen */
router.get('/starts', (req, res) => {
	res.render('StartScreen');
});

/* POST start screen */
router.post('/starts', (req, res) => {
	res.render('StartScreen');
});

/* GET grades screen */
router.get('/grades', (req, res) => {
	res.render('GradeOverview');
});

/* POST grades screen */
router.post('/grades', (req, res) => {
	res.render('GradeOverview');
});

/* GET calendar screen */
router.get('/calendar', (req, res) => {
	res.render('Calendar');
});

/* POST calendar screen */
router.post('/calendar', (req, res) => {
	res.render('Calendar');
});

module.exports = router;
