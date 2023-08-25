var numbers = [3,1,2,4,3,5,1,60,70];
var newNums = []
for (let i = 0; i < numbers.length; i++) {
    if(!newNums.includes(numbers[i])) 
    {
        newNums.push(numbers[i]);
    }
}
console.log('after removing duplicates :')
console.log(newNums);
newNums.sort();
console.log('after sorting')
console.log(newNums);


//user defined filter
// var nums2 = [];
// for (let i = 0; i < numbers.length; i++) {
//   if(numbers[i] > 50 ) {  nums2.push(numbers[i]);}
// }

// built in filter 
var result = numbers.filter(
    function (num) {
        return num > 50;
      }
);
console.log('after filtering > 50')
console.log(result);
 
//-------------------------------------------------

console.log('--------------------------------------------------------');


numbers = [3,1,2,4,3,5,1,60,70];

//user defined min & max :
var  smallest = numbers[0];
var  largest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] < smallest) {smallest = numbers[i];}
    if(numbers[i] > largest) {largest = numbers[i];}
}
console.log("numbers are : " + numbers + "\n min is " + smallest + " max is " + largest );

//built in min , max : 
var min = Math.min.apply(null, numbers);
var max = Math.max.apply(null, numbers);
console.log(min);
console.log(max);

//-------------------------------------------

console.log('--------------------------------------------------------');


function sumAll(numbersArray) {
    var sum = eval(numbersArray.join('+'));    
    return sum;
  }
  
console.log('sum : ')
console.log( sumAll([3,1,4,5,2])); 


console.log('--------------------------------------------------------');

//-------------------------------------
function month(date) 
{
    return date.toString().split(' ')[1];
}
console.log(month(new Date()));
//----------------------------------------


console.log('--------------------------------------------------------');

function arr() 
{
    var myarr = [];
    while(myarr.length< 8) {
        var x = Math.ceil(Math.random() * 10);
        if (!(myarr.includes(x)) ) 
        {
            myarr.push(x);
        }
        
    }
    return myarr;
}

console.log(arr());
