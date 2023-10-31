/*

function cRange(start,end,step=1){
    var numRange = [];
    if(step > 0){
        numRange.push(start);
        var current=start;
        for(var i = start; i <= end; i++){
            var element = current + step;
            if(element > end) return numRange;
            else numRange.push(element);
            current = element;
        }
   }else if(step < 0){
       numRange.push(start);
        var current=start;
        for(var i = start; i >= end; i--){
            var element = current + step;
            if(element < end) return numRange;
            else numRange.push(element);
            current = element;
        }
   } 
}

function cSum(array){
    var sum = 0;
    array.forEach(function(number){
        sum += number;
    });
    return sum;
}
var sum = cSum(cRange(10,1,-1));
document.write(cRange(10,1,-1) + `<br> and the sum is ${sum}`);


// Defininge the reverse function of arrays
function reversed(array){
    return array.reverse();
}




// dealing with highet order function
function showUrl(url,func){
    var domain = func(url);
    if(domain.toLowerCase() == ".com"){
        document.write("<br> this domain is likely to be gotten from GoDaddy");
    }
}


showUrl("https://www.google.com",function(url){
    var domain = url.slice(url.lastIndexOf("."));
    return domain;
});
var json = {
    "name":"Yakubu Habib",
    "sex":"m",
    "age":203,
    "born":"08-06-2001",
    "occupation":"web programmer",
}
var string = JSON.stringify({name: "X", born: 1980});

console.log(string);

// . {"name":"X","born":1980}
console.log(JSON.parse(string).born);

var information = JSON.parse(`{"name":"habib","age":34}`);
console.log(information.name);

*/

//†************************Regular Expressions***********†
//the .test method only checks if there is anything that matches the given expression


var engine = {};
console.log(Object.getPrototypeOf(engine));

engine.type = "Car";
engine.manufacturer = "Benz";
engine.start = function(){
    console.log("Engine started......Ready for work");
}
engine.speak = function(){
    console.log(`this is a ${this.type} engine and it was manufactured by ${this.manufacturer}`);
}
engine.toString = function(){
    return `${this.type} engine by ${this.manufacturer}`;
}

var engineProto = {
        speak:function(){
            console.log(`this is a ${this.type} engine and it was manufactured by ${this.manufacturer}`);
        },
}
var engine2 = Object.create(engineProto);
engine2.type = "Car";
engine2.manufacturer = "Volvo";

engine2.speak();
console.log(engine2);
/*engine.speak.call(engine2);
console.log(engine);
console.log(Object.getPrototypeOf(engine) == Object.getPrototypeOf({}));

engine.speak();

console.log('\n');


var expression = new RegExp("[0-9]");
var sentence = "abc are the three first letter of english alphabets while 123 is for numbers ";

var num = "----378----94";
var shout = "my name is Erudite and i am a programmer";

console.log(/\b(bo+m?)+m(ho+)+\b/.test(shout));
console.log(/\bi\sam\san?\s\w+/.test(shout));
console.log(shout.replace(/\bi\sam\san?\s(\w)+/,"i am a hacker"));*/

 