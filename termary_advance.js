
// --------------

let foodKabo;
let money =100;
if(money >100){
    foodKabo ='biriyani';
}
else{
    foodKabo = "cha biscuit";
}



// ------------------------------------ternary example 1 -------------------------------
// uporer condtional program ta ternary op diye aro shortcut e lika jabe jmn: 
// let foodkabo1;
let money2 = 100;
let foodkabo1 = money2>100 ? "biriyani kabo" : "cha biscuit kabo";


// ------------------------------------ternary example 2 -------------------------------
//ternary op. e multiple condtion diye program:
// let budget = 5000;
// let budget = 3100;
// let budget = 3000;
let budget = 3100;
let jabo = budget>=5000? "sajek velley jabo" :budget>3000? "cox's bazar jabo" :budget===2000? "sitakondo jabo" : "barite pore thakbo";
console.log(jabo);
// evabe ternary op. diye multiple condtion wala program o kora jai (if ,else if,else) ei condtional op er kaj ternary op. diye ar oasily evabe kora jai.



// ------------------------ternary example 3 (multiple condtional op. (&& , ||) diye)-------------------------------



//  let budget2 = 5000;
//  let budget3 = 5000;

//  let budget2 = 4000;
//  let budget3 = 5000;
 let budget2 = 3000;
 let budget3 = 3900;
 let  destination = ( budget2 >= 5000 && budget3 <= 6000) ? "sain martin jabo" : (budget2 >4500 || budget3 >= 4000) ? "sajek velley jabo" :"vasai boshe thakbo" ;

 console.log(destination)