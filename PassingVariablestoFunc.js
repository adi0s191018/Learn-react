console.log("****** Data to function Primitive Variable ****************************** \n")
let myVal = 2;
function PassbyValue(a) {
    a = 4;
    console.log("Data inside function -> ", a);
}
console.log("Data before passing to function -> ", myVal);
// when dataType of variable is primitive the data is passed as value thus it won't alter the value of variable in the outer scope
PassbyValue(myVal);
console.log("Data after function -> ", myVal, "\n");


console.log("****** Data to function Object type Variable ****************************** \n")

let myObj = { a: 1 }

function PassbyReference(obj) {
    // value of the object is not updated inside the function and will effect the function
    obj.a = 4;
    console.log("Data inside function -> ", obj);
}
console.log("Data before passing to function -> ", myObj);
// when dataType of variable is Object the data is passed as reference thus it will alter the value of variable in the outer scope
PassbyReference(myObj);
console.log("Data after function -> ", myObj, "\n");

console.log("****** Data to function Object type Variable update value of Object ****************************** \n")

let MutatingObj = {
    a: "deepak",
    b: "kashyap"
}
function PassbyReferenceUpdateValue(obj) {
    // Mutating the value of object will not update the value in the outside scope
    obj = { c: "GEEKSFORGEEKS" }
    console.log("Data inside function -> ", obj);
}

console.log("Data before passing to function -> ", MutatingObj);
// when dataType of variable is primitive the data is passed as value thus it won't alter the value of variable in the outer scope
PassbyReferenceUpdateValue(MutatingObj);
console.log("Data after function -> ", MutatingObj, "\n");