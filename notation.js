/* 
1.dot notation
2.bracket notation
3.variable er maddome access kora, ortat obj er property ta age theke access kore ekta variable e reke sei variable name diye access kora jai.
*/

const obj = {
    name:"tipu",
    "roll number":786231,
    byVariable:"access by variable",
    2:"two",
}

// console.log(obj[roll number])//error dibe karon bracket notation diye kuno data access korte caile sei key/property er name "" single or double quetetion er vitore rakte hoi.,ortat string akare rakte hobe, otherwise kaj hoina.tai niser niome likte hobe 

// ------------------- 1. bracket/box obj["propertyName"] evabe access korte hbe ----------
console.log(obj['roll number'])//bracket/box notation diye access korle key er name jodi multiple word ero hoi taw sundor kore access korte pare, tobe ,


// ------------------ 2. dot notation  obj.propertyName--------------------------------
// dot notation diye sob kisu access kora jaina, jmn multiple word wala key/property access kora jaina.

console.log(obj.name);


// ------------------ 3.  obj er property variable er maddome access kora jai.--------------------------------

const accessByVariable = obj.byVariable;// evabe age kuno ekta variable e obj er property access kore reke then sei variable ta use kora jabe.. e ketre kuno string fistring korte hobena.
console.log(accessByVariable);//

// way 2 
// cosnt accessByVariable2 = obj.2;// errror dibe karon number dot notation diye access kora jaina, tai bracket/box notation use korte hobe. & bracket notation diye access korar smy propertyName jodi number (232) hoi thle string akare likte hoina ,niser niome liklei hoye jai.
const accessByVariable2 = obj[2]; // number hole evabe bracket/box notation diye access korte hobe & string akarew likte hoina number type property name hole
console.log(accessByVariable2);//output: two
