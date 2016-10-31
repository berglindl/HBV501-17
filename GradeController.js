var classButton = document.getElementById('add_class');
var classDiv = document.getElementById('new_class');

function hideShowButton(){
	classDiv.style.visibility = classDiv.style.visibility === "hidden" ? "visible" : "hidden";
}

hideShowButton();

classButton.addEventListener("click", hideShowButton, false);