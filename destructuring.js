
/* -------------------------------array destructuring------------ */

const numbers = [32,45];

// console.log(numbers[0])// 32
// console.log(numbers[1])// 45

// array destructuring system:1 -------------------
// const [x , y] = [32,45];

// array destructuring system:2-------------------
const [x , y] = numbers; // array er protom vlaue k x =32,y=45 seeet hoye jabe.
console.log(x , y); // x = 32 , y = 45

// array destructuring system:3-------------------
function  boxify (num1 , num2) {
    const nums = [num1 , num2];
    return nums;
}


// array destructuring system:3-------------------
// const [first , second] = [3,4];
const [first , second] = boxify(3,4);//function theke jeheeto ekta array return pabee sei array er value k evabew destructuring kora jai.
console.log(boxify( 3, 4));


// array destructuring system:3-------------------
const student1 = {
    name : "sakib khan",
    ageee:80,
    moives:["king khan" ,"dhakar mastan"],
}

// const [firstMovie, secondMovie] = ["king khan" ,"dhakar mastan"];
const [firstMovie1, secondMovie1] =student1.moives;


/* ---------------------------object destructuring-------------------- */

// object destructuring system:1-------------------
const student = {
    name : "sakib khan",
    ageee:80,
    moives:["king khan" ,"dhakar mastan"],
}

// const [firstMovie, secondMovie] = ["king khan" ,"dhakar mastan"];
const [firstMovie, secondMovie] =student.moives;




// object destructuring system:2 -------------------
const person = {name:'sahillu', age:"22", arrayOfObj:[2,3,4] , nestedOf:{roll:22,class:5}};

/* evabe caile kuno puro obj ta kuno variable (person) e declare na kore sei jaigai  direct destructuring kora jai.ortat obj er prottekta property sei (person)objName er jaigai curly bracket er vitore diye lika jai.jmn:
*/
// object destructuring system:2 -------------------
const {name , age , arrayOfObj , nestedOf}= 
{name:'sahillu', age:"22", arrayOfObj:[2,3,4] , nestedOf:{roll:22,class:5}};

console.log(name,age, arrayOfObj , nestedOf)
   

// object destructuring system:3-------------------
const student3 = {
    name_a : "sakib khan",
    age3:80,
    moives:["king khan" ,"dhakar mastan"],
}

// const [firstMovie, secondMovie] = ["king khan" ,"dhakar mastan"];

const {name_a} = student;// ekane (student3)obj er (name_a) property ta  ei line e (name_a) variablee e seet hoye jabe. ortat destructuring hbe.example 2:

const { age3 }  =student3;
console.log(age3);//output:  80


// object destructuring system: 4 -------------------

const employee = {
    name:"saddam",
    age:24,
    location:"sadgaw",

    sfecification: {
        height:66,
        weight:67,
        drink:"water"
    }
}

const {height , weight} = employee.sfecification;
console.log(height , weight)//ouput: 66 67
