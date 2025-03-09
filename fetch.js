const student1 = {
    name_a : "sakib khan",
    age3:80,
    moives:["king khan" ,"dhakar mastan"],
}

// 1. ----JSON.stringify er maddome obj k strigified kora----------------------------
 const strigified = JSON.stringify(student1);

 console.log(strigified)//output:
 //  {"name_a":"sakib khan","age3":80,"moives":["king khan","dhakar mastan"]}

 
// 2. ----JSON.parse er maddome strigified kora obj k abr direct obj er rop e firai ana ----------------------------

// const strigified_to_obj = JSON.parse(strigified);
// console.log(strigified_to_obj);


// json fetch api niyee kaj kora:

// fetch("url")
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))


// objeect er keys & values & entries/pairs eksatee newa :
const keys =Object.keys(student1);
const values =Object.values(student1);
const pairs = Object.entries(student1);// key & values ortat full property/data pete caile


// array er loop calanor jonno future e forEach loop ta use korbo jeta ES6 e asce. ar jodi return pete cai taile map loop use korbo

const array = [ 1,3,44,56,7];
array.forEach(arr => console.log(arr));//return deina bidai kuno varaible declare kora hoini
const  returnedNewArray = array.map(arr => arr*2);// return dei,main array tik rake ,new array return dei.
console.log(returnedNewArray);



// ekta multiple obj wala array k copy kore sei copy kora array te arekta new obj add korar system: 

const products = [
    {name:"laptop" , price:35000,brand:"hp"},
    {name:"iphone" , price:5000,brand:"apple"},
    {name:"phone" , price:3440,brand:"samsung"},
    {name:"watch" , price:3440,brand:"apple"},
   
   ];

   const newObjOfArray  = {name:"tab" , price:35000,brand:"samsung"};

   const newProductsArray = [...products , newObjOfArray];
   console.log(newProductsArray)