// Date & Math

var arr = []; // array
var obj = {} // object
var car = {
    "model": 2023,
    "color": "black",
    "brand": "BMW",
    "class": ["ist", "2nd", "3rd"],
    "fast": function(){console.log(` This car Can leed to 200KM per Hour`) },
    "overprice": function (x) {
        if (x == "1st Edition") {
            console.log("over price is 1000$")
        }
        else if (x == "2nd Edition") {
            console.log("over price is 500$")
        }
        else {
            console.log("car not Available")
        }
    },
    "owner": {"_name":"ali", age:30}
   
}

//car.color  // getting
//car.model=2022 // setting

// 'color' in car

//car.hasOwnProperty('toString')
//car.hasOwnProperty('color')

//Object.keys(car) // return array of  car object keys

//for (i in car) {
//    console.log(`${car[i]}`)
//}

function Students(_name, _age, _grade) {

    this.name = _name;
    this.age = _age;
    this.grade = _grade;
    //var grade;
    //this.setGrade = function (x) {
    //    this.grade = x;
    //}
    //this.getGrade = function () {
    //    return this.grade;
    //}
    this.print = function () {
        console.log(`name : ${this.name} Age : ${this.age}  Grade : ${this.grade}`)

    }


}  // end of students 



var stds = [new Students("heba", 20, 85),
new Students("kareem", 19, 90),
new Students("ali", 23, 70),
    new Students("baher", 26, 100)]

stds.forEach(function (elm) {
    elm.print()

})
console.log("-------------------------------")

var result = stds.filter(function (a) {
   return  a.grade >80
})

result.forEach(function (elm) {
    elm.print()

})