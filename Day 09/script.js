// console.log("hi");

//---------------Let--------------------
/* {
    let names = "Janidu";
}

console.log(names); */

//---let is block scoped, so it cannot be accessed outside the block.--//

//---------------Var--------------------/* 
/* {
    var address = "panadura";
}   

console.log(address); */

//---var is function scoped, so it can be accessed outside the block.--//


//--------const--------------------/
/* const names = ["Janidu", "kamal", "kasun", "nimal", "Ravindu"];

console.log(names);

names = "sadun"
console.log(names) */

//---const can't be reassigned,---//


//---------Array data manipulation--------------//

/* const numbers = [10, 20, 60, 70, 80, 30, 40, 50, 90, 100];

console.log(numbers);

numbers.push(110); //-- adds an element to the array
console.log(numbers);

numbers.pop(); //-- removes the last element from the array
console.log(numbers);
    
console.log(numbers.toReversed()); //-- reverses the array and returns a new array

console.log(numbers.toSorted()); //-- sorts the array and returns a new array(does not sorted)

console.log(numbers.length);

numbers.unshift(5); //-- adds an element to the beginning of the array
console.log(numbers);

numbers.shift(); //-- removes the first element from the array
console.log(numbers);

/////////////////////////////////////////////// */

/* const numbers = [10, 20, 60, 70, 80, 30, 40, 50, 90, 100];

function replaceNumber(){

    let oldNum = Number(document.getElementById("oldNumber").value);
    let newNum = Number(document.getElementById("newNumber").value);

    let index = numbers.indexOf(Number(oldNum));

    numbers[index] = newNum;

    console.log(numbers);
    
} */

//---------------------Methods----------------------

//-------Step 01 >

/* function getSum(num1,num2){
    return num1+num2;
} */

//-------Step 02 >

/* let getSum = function(num1,num2){
    return num1+num2
} */

//-------Step 03 >

/* let getSum = (num1,num2) =>{
    return num1+num2;
} */

//-------Step 04 >

/* let getSum = num1 =>{
    return num1;
} */

//-------Step 05 >

let getSum = num1 => num1;

console.log(getSum(10,20));
