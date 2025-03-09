const ol_li_container = document.getElementById('ol_li_container');

const addToLocalStorage = () => {

    const input_field1 = document.getElementById('keyName');
    const input_field2 = document.getElementById('keyValue');

    const input1Value = input_field1.value;
    const input2Value = input_field2.value;


    localStorage.setItem( "input1Value" , "input2Value" );
   localStorage.setItem( input1Value , input2Value )
    display_input_value(input1Value , input2Value)
    input_field1.value = '';
    input_field2.value = '';

}



const display_input_value = ( input1Value , input2Value ) => {


    const li = document.createElement('li');

    li.innerText = `${input1Value}: ${input2Value}`

    ol_li_container.appendChild(li)



}

// -----------------------

 const getValueFromLocalStorage = () =>{
    let  mt_obj_cart= {};


    valueFromLocalStorage = localStorage.getItem('cart_object');
    if(valueFromLocalStorage){
        mt_obj_cart = valueFromLocalStorage;
        // console.log(mt_obj_cart)
    }
    return mt_obj_cart;

 }
//  {"name":"tipu"}
 const   returnedObj_FromLocalStorage =  getValueFromLocalStorage();
 console.log(returnedObj_FromLocalStorage)