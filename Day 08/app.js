

function clickMeButton() {

    let txtName = document.getElementById("txtName").value;
    
    document.getElementById("lblCustomerNames").innerHTML += `<li>${txtName}</li>`
}