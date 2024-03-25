// Task_1
let object_1 = { name: "Person 1", age: 5 };
let object_2 = { age: 5, name: "Person 1" };

let key_1 = Object.keys(object_1);
let key_2 = Object.keys(object_2);
let equal = true;

for (let key_value of key_1) {
  if (object_1[key_value] !== object_2[key_value]) {
    equal = false;
    break;
  }
}

if ((equal = true)) {
  console.log("They have similar properties");
} else {
  console.log("They do not have similar properties");
}

//  Task_2
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function() {

var data = request.response;
//console.log(data);
var result = JSON.parse(data)
//console.log(result);
for(var i=0;i<result.length;i++){
    
    console.log(result[i].flags.svg)
}
}

//Task_3
var request_1 = new XMLHttpRequest();
request_1.open("GET","https://restcountries.com/v3.1/all",true)
request_1.send();
request_1.onload = function() {

var data = request_1.response;
//console.log(data);
var result = JSON.parse(data)
//console.log(result);
for(var i=0;i<result.length;i++){
    
  console.log("Countryname:"+" "+result[i].name.common,",", "Regions:"+" "+result[i].region, ",", "Subregions:"+" "+result[i].subregion,",", "Population:"+" "+result[i].population)
}
}