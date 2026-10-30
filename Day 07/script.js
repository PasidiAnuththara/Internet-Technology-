// console.log("hii");

// -------------- OBJECT ARRAYS IN JavaScript-------------------//

 let customer = {
    name : "Janidu",
    age : "20",
    address : "Panadura",
    contact : "0784512354",
    salary : 750000
}
 
//-------------------------------------------------------------//

let customerList = [];
let itemList = [];

function AddButton() {
    // console.log("Add Student");

    let name = document.getElementById("txtName").value;
    let age = document.getElementById("txtAge").value;
    let salary = document.getElementById("txtSalary").value;
    let address = document.getElementById("txtAddress").value;
    let contact = document.getElementById("txtContact").value;

    console.log(name);
    console.log(age);
    console.log(salary);
    console.log(address);
    console.log(contact);

    let customers = {
        name: name,
        age: age,
        salary: salary,
        address: address,
        contact: contact
    };

    customerList.push(customers);
    console.log(customerList);

    let body = `<tr>
            <th>name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Contact</th>
        </tr>`

    for (let customers of customerList) {
        body += `  
        <tr>
            <td>${customers.name}</td>
            <td>${customers.address}</td>
            <td>${customers.age}</td>
            <td>${customers.salary}</td>
            <td>${customers.contact}</td>
        </tr>
       `
    }

    document.getElementById("tblCustomer").innerHTML = body;

}


function AddItemsButton() {
    let iName = document.getElementById("txtItemName").value;
    let iPrice = document.getElementById("txtItemPrice").value;
    let iQty = document.getElementById("txtItemQty").value;

    console.log(iName);
    console.log(iPrice);
    console.log(iQty);

    let items = {
        itemName: iName,
        itemPrice: iPrice,
        itemQty: iQty
    };

    itemList.push(items);
    console.log(itemList);

    let itemBody = `
        <tr>
            <td>Item</td>
            <td>Price</td>
            <td>QTY</td>
        </tr>`

    for (let itemss of itemList) {
        itemBody += `
        <tr>
            <td>${items.itemName}</td>
            <td>${items.itemPrice}</td>
            <td>${items.itemQty}</td>
        </tr>
        
        `

        document.getElementById("tblItems").innerHTML = itemBody;
    }
}

//----------------------------------Accsess to objects-----------------------------------//

let country = {
    name: "Sri lanka",
    National: "Srilankan",
    peoples: {
        p1: "sinhala",
        p2: "tamil",
        p3: "burger",
        religons: {
            r1: "Buddhist",
            r2: "muslims",
            r3: "cristians",
        }
    },
    sports: {
        s1: "cricket",
        s2: "vollyball",

        players: [
            {
                name: "saman",
                age:"18"
            },
            {
                name: "Kamal",
                age:"20"
            },
            {
                name: "kasun",
                age:"22"
            }

        ]
    }
}

//-----------------------------Access---------------->

console.log(country.peoples.religons.r1); // accsess to Buddhist
console.log(country.sports.s2);//accsess to vollyball
console.log(country.sports.players[1].name); // accsess to arry using index
console.log(country.sports.players[2].age); //accses to kasun's age

//--------------------------------------------------------------------------------------//

