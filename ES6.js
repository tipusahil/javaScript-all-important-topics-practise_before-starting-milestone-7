
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
// copy products array & then add new product1
const products = [
    {name:"laptop" , price:35000,brand:"hp"},
    {name:"iphone" , price:5000,brand:"apple"},
    {name:"phone" , price:3440,brand:"samsung"},
    {name:"watch" , price:3440,brand:"apple"},
   
   ];

   const newObjOfArray  = {name:"tab" , price:35000,brand:"samsung"};
// copy products array & then add new product1
   const newProductsArray = [...products , newObjOfArray];
   console.log(newProductsArray)


//    -------------------------------------------
//2. jei object er name er value phone ase seta bad diye baki obj gulo niye nw obj & new obj add 

// 2.delete (name:"phone") product1 then copy products array & then add new product1
const outoutPhone2 = products.filter(product => product.name !=="phone");
console.log(outoutPhone2)

const newObjOfArray2  = {name:"tab" , price:35000,brand:"samsung"};
const newArrayOutOfPhone = [...outoutPhone2 ,newObjOfArray2 ];
console.log(newArrayOutOfPhone);
