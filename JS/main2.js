// Null Vs undefined

let value;
value = 1;
value = null;
//log(value);

// objects
let car = {
    color: "red",
    numOfWheels: 4
};

//log(car.color);
//log(car.numOfWheels);

// flow
// if condition

/*
What is false:
* false
* 0
* "" / ''
* null
* undefined
* NaN

What is true:
Everything else
* true
* -9999999999999....999999999999
* "asdasd"
*/


let amount = 10;
let amount2 = "10";
let amount3 = 30;

/*log(typeof amount);

if (amount == amount2) {
    log("Hello from the if TRUE statement");
} else {
    log("Hello from the if FALSE statement");
}

if (amount === amount2) {
    log("Hello from the if TRUE statement");
} else {
    log("Hello from the if FALSE statement");
}

if (amount !== amount2) {
    log("Hello from the if TRUE statement");
} else {
    log("Hello from the if FALSE statement");
}

if (amount != amount2) {
    log("Hello from the if TRUE statement");
} else {
    log("Hello from the if FALSE statement");
}

if (amount > amount3) {
    log("Hello from the if TRUE statement");
} else {
    log("Hello from the if FALSE statement");
}

if (amount < amount3) {
    log("Hello from the if TRUE statement");
} else {
    log("Hello from the if FALSE statement");
}

if (amount >= amount3) {
    log("Hello from the if TRUE statement");
} else {
    log("Hello from the if FALSE statement");
}

if (amount <= amount3) {
    log("Hello from the if TRUE statement");
} else {
    log("Hello from the if FALSE statement");
}*/

let math = +(1.1 + 1.3).toFixed(2);
//math = +math.toFixed(2);

//log(typeof math);

/*if (math === 2.4){
    log("1.1 + 1.3 === 2.4");
}else{
    log("1.1 + 1.3 !== 2.4");
}*/

let condition = 1112315465465;

/*if(condition){
    log("TRUE");
}else {
    log("FALSE");
}*/

//      Condition ? true val : false val
let v = false      ?    10    :     20;

//true ? log('111') : log('2222');

//log(v);


// Scope
/*let outerScope = 'Simon';
if (true) {
    let innerScope = 'Bob';
    log(innerScope);

    outerScope = 'Simon 2';

    log(outerScope);
}

log(outerScope);
//log(innerScope);
*/
/*
if (true) {
    log('Simon');
    log('asdasd');   
} else {
    log('Simon 2');
    log('Bob');
}*/
/*
let val2 = 11;

if (val2 === 10) {
    log(1);
} else if(val2 > 5) {
    log(2)
} else {
    log(3)
}*/

// Loops
let i = 0;

/*for(i = 1; i < 10; i *= 2){
    log("Loop " + i);
}*/
/*
for(i = 5; i > 0; i--){
    log("Loop " + i);
}

*/

while (false) {
    log('While ' + i);
    //i++;
}

//log('after loop');

/*for(let i = 20; i > 0; i = i - 5){
    log("Im line " + i);
}*/

i = 0;

do {
    log('do ' + i);
    //i++;
} while(false);


/*do {
    Get Value from user (1-10)
    valueGood = if value is ok
} while (valueNotGood);*/