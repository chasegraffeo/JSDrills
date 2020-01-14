var val = "ChaseGraffeo";
// calls my name
const num = 50;
// calls 50
var add = 5 + 4;
// adds 5 & 4 to make nine

function sayHello() {
    alert("Hello World!");
}

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    } 
}
sayHello();

checkAge("Charles", 21);

checkAge("Abby", 27);

checkAge("James", 18);

checkAge("john", 17);

var favVeg = ["onion", "potatoe", "carrot"];

for (var i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]);
}

var objects = [
    (Jenn = {
        name: "jenn",
        age: 32
    }),
    (Shelby = {
        name: "Shelby",
        age: 22
    }),
    (Tanner = {
        name: "Tanner",
        age: 19
    }),
    (Liam = {
        name: "Liam",
        age: 4
    })
];


for (i = 0; i < objects.length; i++){
    checkAge( objects[i].name, objects[i].age);
}

function getLength(pop){
    word_length = pop.length;
    return word_length
}

x = getLength("Hello World");

if (x%2 == 0){
    console.log('The world is nice and even!')
}else{
    console.log( 'The world is an odd place!' )
}