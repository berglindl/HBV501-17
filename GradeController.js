/*
var classButton = document.getElementById('add_class');
var classDiv = document.getElementById('new_class');

function hideShowButton(){
	classDiv.style.visibility = classDiv.style.visibility === "hidden" ? "visible" : "hidden";
}

hideShowButton();

classButton.addEventListener("click", hideShowButton, false);
*/

function addNewRow() {
	var insertAssignment = document.getElementById("addNewAssignment").value;
	var insertGrade = document.getElementById("addNewGrade").value;

	var gradingTable = document.getElementById("gradeTable");
	var gradingTableLength = (gradingTable.rows.length) - 1;
	var tableRow = gradingTable.insertRow(gradingTableLength).innerHTML = "<tr id='newRow" +
																		gradingTableLength +
																		"'><td id='newAssignment" +
																		gradingTableLength +
																		"'>" + insertAssignment +
																		"</td><td id='newGrade" +
																		gradingTableLength +
																		"'>" + insertGrade +
																		"</td><td><input type='button' id='editRow" + 
																		gradingTableLength +
																		"' value='Edit' onclick='editTheRow(" +
																		gradingTableLength +
																		")'><input type='button' id='saveRow" + 
																		gradingTableLength +
																		"' value='Save' onclick='saveChanges(" +
																		gradingTableLength +
																		")'><input type='button' id='deleteRow" +
																		gradingTableLength +
																		"' value='Delete' onclick ='deleteTheRow(" +
																		gradingTableLength +
																		")'></td></tr>";
	document.getElementById("addNewAssignment").value="";
	document.getElementById("addNewGrade").value="";
	/*
	var table = document.getElementById(tableID);

	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);

	var colCount = table.rows[0].cells.length;

	for(var i=0; i<colCount; i++) {

		var newcell	= row.insertCell(i);

		newcell.innerHTML = table.rows[0].cells[i].innerHTML;
				//alert(newcell.childNodes);
		switch(newcell.childNodes[0].type) {
			case "text":
				newcell.childNodes[0].value = "";
				break;
		case "checkbox":
				newcell.childNodes[0].checked = false;
				break;
		}
	}
	*/
}

function editTheRow(item){
	document.getElementById("saveRow" + item).style.display="block";
	document.getElementById("editRow" + item).style.display="none";

	var editAssignment = document.getElementById("newAssignment" + item);
	var editGrade = document.getElementById("newGrade" + item);

	var dataAssignment = editAssignment.innerHTML;
	var dataGrade = editGrade.innerHTML;

	editAssignment.innerHTML = "<input type='text' id='newAssignment" +
								item + "' value='" + dataAssignment +"'>";
	editGrade.innerHTML = "<input type='text' id='newGrade" +
								item + "' value='" + dataGrade +"'>";
}

function saveChanges(item){
	var saveAssignment = document.getElementById("newAssignment" + item).value;
	var saveGrade = document.getElementById("newGrade" + item).value;

	document.getElementById("newAssignment" + item).innerHTML = saveAssignment;
	document.getElementById("newGrade" + item).innerHTML = saveGrade;

	document.getElementById("editRow" + item).style.display="block";
	document.getElementById("saveRow" + item).style.display="none";
}

function deleteTheRow(item){
	document.getElementById("newRow" + item + "").innerHTML="";
}

/*
function deleteRow(tableID) {
	try {
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;

		for(var i=0; i<rowCount; i++) {
			var row = table.rows[i];
			var chkbox = row.cells[0].childNodes[0];
			if(null != chkbox && true == chkbox.checked) {
				if(rowCount <= 1) {
					alert("Cannot delete all the rows.");
					break;
				}
				table.deleteRow(i);
				rowCount--;
				i--;
			}


		}
	}catch(e) {
		alert(e);
	}
	
}
*/