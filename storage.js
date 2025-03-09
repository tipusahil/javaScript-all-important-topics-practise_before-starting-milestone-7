
const addToLocalStorage = () => {

    const input_field1 = document.getElementById('keyName');
    const input_field2 = document.getElementById('keyValue');

    // const id = input_field1.value;
    // const value = input_field2.value;
    // localStorage.setItem( id , value )

    const input1Value = input_field1.value;
    const input2Value = input_field2.value;


    // mt value localStorage e add na hoi moto korte caile

    if (input1Value && input2Value) {
/*----mt   && mt_anything holee ei code block e dukbena. &
// insidevalue && insideValue hoi taile code block e dukbe & seta localStorage e set hoye jabe.

// eknae if er conditon ta holo j : jodi if er vitore thaka (input1Value , input2Value) ei 2tar value truthy hoi thle if er code block e dukbe & localStorage e value ta set kore edibee, ar jodi (input1Value , input2Value) ei 2tar kuno ektar vlaue value falsy hoi ortat useer input ee kuno valuee input na dilee to mt string dibe, so mt_string jeehto falsy tai if er condtion e dukbena,& localStorage e sei mt string/array/obj kisui set hobeena. */

        localStorage.setItem(input1Value, input2Value)
    }

    input_field1.value = '';
    input_field2.value = '';


    // display_input_value(input1Value, input2Value) 
}




// ------------------------------------ (localStorage.setItem) ----------------------
/* 
localStorage e obj kinba array localStorage e set korte caile  niser niome ekorte hbe.
*/

 //---------------localStorage e array add korar  way 1 ---------------------------

 const array = [2,3,4,2,43,2];
 const array_After_Sringified = JSON.stringify(array);

localStorage.setItem("array 1" , array_After_Sringified );

 //---------------localStorage e array add korar  way 2 (shorthand) ---------------------------
 localStorage.setItem("array 2" , JSON.stringify([1,2,43,65,6]));

//  objeect
//---------------localStorage e object add korar  way 1 ---------------------------
const student11 = {name:"tipu",roll:786231}
const strigified = JSON.stringify(student11)
localStorage.setItem("object_1" , strigified)

//---------------localStorage e object add korar  way 2 (shorthand) ---------------------------
const student2 = {name:"sahil",roll:786231}
localStorage.setItem("object_2" , JSON.stringify(student2))


// --------------------------------------------------------

// ---------------------------------- (localStorage.getItem) theke array kinba object read/edit korte caile  ---------------------


// localStorage theke array kinba obj jai document e use korina keno json.parse e convert kore use kortee hobe.
// array 1
const arrayFromLOCALstoragee = localStorage.getItem("array 1");
console.log(JSON.parse(arrayFromLOCALstoragee));
// egulor output vs code eer terminal e deka jabena, browser er consolee e deka jabe.


// object 1
const object_1_from_localStorage = localStorage.getItem("object_1");
console.log(JSON.parse(object_1_from_localStorage));








// const display_input_value = (input1Value, input2Value) => {


//     const li = document.createElement('li');

//     li.innerText = `${input1Value}: ${input2Value}`

//     ol_li_container.appendChild(li)



// }

// // -----------------------

// const getValueFromLocalStorage = () => {
//     let mt_obj_cart = {};


//     valueFromLocalStorage = localStorage.getItem('cart_object');
//     if (valueFromLocalStorage) {
//         mt_obj_cart = valueFromLocalStorage;
//         // console.log(mt_obj_cart)
//     }
//     return mt_obj_cart;

// }
// //  {"name":"tipu"}
// const returnedObj_FromLocalStorage = getValueFromLocalStorage();
// console.log(returnedObj_FromLocalStorage)
