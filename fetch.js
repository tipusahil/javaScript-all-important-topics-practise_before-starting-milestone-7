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

const strigified_to_obj = JSON.parse(strigified);
console.log(strigified_to_obj)