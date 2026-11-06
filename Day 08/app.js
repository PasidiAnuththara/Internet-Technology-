// const customerNames = []
// const itemsArray = []

// function clickMeButton() {
//     let txtName = document.getElementById("txtName").value;
//     // document.getElementById("lblCustomerNames").innerHTML += `<li>${txtName}</li>`
//     customerNames.push(txtName)
//     loadNames();
// }

// function loadNames() {
//     document.getElementById("lblCustomerNames").innerHTML = "";
//     for (let cusName of customerNames) {
//         document.getElementById("lblCustomerNames").innerHTML += `<li>${cusName}</li>`
//     }
// }

// ///////////////////////////////////////////////////////

// function ItemAddButton() {
//     let iName = document.getElementById("itemName").value;
//     itemsArray.push(iName)
//     loadItems();
// }

// function loadItems() {
//     document.getElementById("lblitem").innerHTML = "";
//     for (let itemsN of itemsArray) {
//         document.getElementById("lblitem").innerHTML += `<li>${itemsN}</li>`
//     }
// }

//////////////////////////////////////////////////////////////
const customers = [];

function AddCustomer() {
    let cusID = document.getElementById("ID").value;
    let cusName = document.getElementById("Name").value;
    let cusAge = document.getElementById("Age").value;
    let cusAddress = document.getElementById("Address").value;
    let cusSalary = document.getElementById("Salary").value;

    let customer = {
        ID: cusID,
        Name: cusName,
        Age: cusAge,
        Address: cusAddress,
        Salary: cusSalary
    }
    customers.push(customer);
    console.log(customers);

    let body = `<tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Salary</th>
        </tr>`

    for (let customer of customers) {
        body += `
            <tr>
                <td>${customer.ID}</td>
                <td>${customer.Name}</td>
                <td>${customer.Age}</td>
                <td>${customer.Address}</td>
                <td>${customer.Salary}</td>
            </tr>`
    }
    document.getElementById("tblCus").innerHTML = body;
}

const itemsArray = [];

function AddItem() {
    let itemsID = document.getElementById("itemID").value;
    let itemsName = document.getElementById("itemName").value;
    let itemsPrice = document.getElementById("itemPrice").value;
    let itemsQty = document.getElementById("itemQty").value;

    let items = {
        ID: itemsID,
        Name: itemsName,
        Price: itemsPrice,
        Qty: itemsQty
    }

    itemsArray.push(items);
    console.log(itemsArray);

    let ItemTblBody = `
        <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>QTY</th>
        </tr>
    `

    for(let items of itemsArray){
        ItemTblBody += `
           <tr>
                <td>${items.ID}</td>
                <td>${items.Name}</td>
                <td>${items.Price}</td>
                <td>${items.Qty}</td>
           </tr> 
        `
    }
    document.getElementById("tblItem").innerHTML = ItemTblBody;
}

