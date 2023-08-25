//var arr = new Array(); // empty array
//var arr = new Array(2,4,5,8,9);
//var arr = []; //empty Array


//var arr = [];
//arr[0] = 10;
//arr[1] = 50;
//arr[10] = 30;
//arr[100] = 70;
//spars Array
//for (var i = 0; i < arr.length; i++) {
//    console.log(arr[i])
//}

//console.log(0 in arr)

// in operator with Arrays check  index state if has value or not

//for (i in arr) {

//    console.log(arr[i])
//}

var arr = [20, 1, 5, 11, 90, 23, 7]
//arr.push();

//arr.push(10,34);  // add at end of array and return new length
//arr.unshift(10,34);  // add at start of array and return new length
//arr.pop()// return last value in arr
//arr.shift(); //return firset bvalue in arr
//delete arr[0]// delete just value in index 0 but can't affect array size'
//arr.includes(20)
//eval("2+2")
//eval("alert('hi')")

//var sum = 0;
//for (var i = 0; i < arr.length; i++) {
//    sum+=arr[i]
//}
//console.log(`sum = ${sum}`)

// eval(arr.join('+'))

//arr.forEach(loop);

//function loop(elm, index) {
//    console.log(`${index} : ${elm}`)

//}

//arr.forEach(function (elm) {
//    console.log(` ${elm}`)
//});

//var filteredArr = arr.filter(function (a) {
//    //if (a>20) {
//    //    return a;
//    //}
//    return a > 20;


//});

/*arr.sort();*/  //sort based on ASCI Code
//arr.sort(loop)        //20, 1, 5, 11, 90, 23, 7,7

//function loop(a, b) {
//    if (a > b)
//        return 1;
//    else if (a < b)
//        return -1;
//    else
//        return 0;

//}

//arr.sort(function (a, b) {
//    if (a > b)
//        return 1;
//    else if (a < b)
//        return -1;
//    else
//        return 0;

//})

//arr.sort(function (a, b) {
//    return a - b;

//})  // ascending
arr.sort(function (a, b) {
    return b - a ;

})  // descending