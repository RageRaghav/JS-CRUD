var selectedRow= null

function onFormSubmit(e){
    event.preventDefault;
    var formData= readData();
    if(selectedRow==null){
        add_row(formData);
    }
    else{
        UpdateData(formData);
    }
    resetCode();
}

function readData(){
    formData={};
    formData['name']= document.getElementById("name").value;
    formData['email'] = document.getElementById("email").value;
    formData['password'] = document.getElementById("password").value;
    return formData;
    
}

function add_row(data){
    let table =  document.getElementById("dtable").getElementsByTagName("tbody")[0];
    let newrow = table.insertRow();
    let cell0 = newrow.insertCell(0);
    let cell1 = newrow.insertCell(1);
    let cell2 = newrow.insertCell(2);
    let cell3 = newrow.insertCell(3);
    cell0.innerHTML=data.name;
    cell1.innerHTML=data.email;
    cell2.innerHTML=data.password;
    cell3.innerHTML=`<button onClick="editData(this)">Edit</button> <button onClick="DeleteData(this)">Delete</button>`
    
}

function editData(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("password").value = selectedRow.cells[2].innerHTML;
}

function UpdateData(formData){
    selectedRow.cells[0].innerHTML = formData['name'];
    selectedRow.cells[1].innerHTML = formData['email'];
    selectedRow.cells[2].innerHTML = formData['password'];
}

function DeleteData(td){
    if(confirm("Confirm delete?")){
        row = td.parentElement.parentElement;
        document.getElementById('dtable').deleteRow(row.rowIndex);
        resetCode();

    }
}

function resetCode(){
    var name = document.getElementById("name").value="";
    var email = document.getElementById("email").value="";
    var password = document.getElementById("password").value="";
    selectedRow = null;
}