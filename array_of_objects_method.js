/* 


*/

const products = [
 {name:"laptop" , price:35000,brand:"hp"},
 {name:"iphone" , price:5000,brand:"apple"},
 {name:"phone" , price:3440,brand:"samsung"},
 {name:"watch" , price:3440,brand:"apple"},

];

const justBrand = products.map(product1 => product1.brand );// (products)array eeer prottteketa objeect k er specific kuno property /key access korte caile.
console.log(justBrand)

const parr = Object.entries(products)
console.log(parr);

const xx = products.map(pro => {
    const pairs = Object.entries(pro);
    // console.log(pairs)
} );
// console.log(xx)


products.forEach(product => console.log(product.price));//map eer motoi but return deina bidai kuno varaible assign kora hoini 

const filteredItem = products.filter(product => product.price< 5000);
console.log(filteredItem)


const filteredItem2 = products.filter(product => product.brand.includes("pp"));
// eeekanee condtion ta holo j products array er jei obj er brand property er value name (pp) double pp ase sei objeect gulo return kroe dibe.
console.log(filteredItem2)

const find1 = products.find(product => product.brand.includes("pp"));
// ekanee etaw samee filter er motoi filter hocce filter condtion er sate ejei gulo macth kabe sob gulo notun ekta array er maddome return koree dibe. kintu (find) hocce find er condito ner sate jeuglo match kabe sob gulo theke protom jeta match kabe condtion er satai return korbe. jeheto ekadik match kelew shudo protom jeta match kabee setai return krobe tai notun array te return dibeena, emne ekta otai return dibee
console.log(find1)
