function fun() {
    console.log("welcome from functions ")
}  // declaration

//fun()// call

function sayHI(_name) {
    console.log(`Hi : ${_name}`)
}

//sayHI("ali") // call

//function power(num) {
//    return num * num;

//}
//var result = power(3)

//       // optional parmeters
//function save(_name, age, isOkay) {
//    if (isOkay == undefined) {
//        console.log(`can't  save this person `)

//    }
//    else {
//        console.log(`${_name} who is ${age} years old is Saved`)
//    }

//}

//// default params
//function sum(x = 0, y = 0, z= 0) {
//    console.log(`Sum = ${x+y+z}`)
//}

function sum2() {
    //console.log(arguments)
   var  sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(`sum = ${sum}`)

   

}

// ------------------------
var power = function (num) {
    return num * num;
}



