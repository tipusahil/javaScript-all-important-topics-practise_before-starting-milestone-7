// toggle boolean koorar jonno:
let isActive1 = true;
isActive1 = !isActive1;// true thakle false korbe ar false thakle true korbe, ortat (togggle) korbe



// ----------------number to string conversion shortcut:--------------------
let x = 10;
console.log(typeof x)

let y = x + '';// x varaible er sate  mt_string jog/concat korlei sei x er vlaue (10) ta string hoye jai.
console.log(typeof y)


// --------------------number data string to number e convert shorthand way---

let input = '453';
const afterStringToNumber = +input;// oi string value wala variable er age (+)  dile sei string value ta number e convert hoye jai.

const isActive = tr ;
const show_User = () => console.log("display user , true");
const hide_User = () => console.log("hide user ,false");

isActive ? show_User() : hide_User();

// -----------------------------------aro shortcut :
// use (&&) if left side  is true then right side will be executed;
// ortat niser condtion ta holo: (isActive = true) hole (&&) er right side ta execute hbe ortat run hobe ,ar jodi left side false hoi thle right side execute hobena.
isActive && show_User();


isActive || hide_User();// left side flase hole right side execute hboe.ortat (&&) er shortcut tar biporid kajta korbe.