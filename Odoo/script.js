function addRow() {
    // Get a reference to the table
    var table = document.getElementById("myTable");
    
    // Create a new row
    var newRow = table.insertRow();
    
    // Create cells in the new row and add data
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    cell1.innerHTML = "<input type='text' value=''>";
    cell2.innerHTML = "<input type='number' value=''>";
    cell3.innerHTML = "<input type='number' value=''>";
    cell4.innerHTML = "<input type='number' value=''>";
    cell5.innerHTML = "<button type='button' onclick='deleteRow(this)'>Delete</button>";
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
