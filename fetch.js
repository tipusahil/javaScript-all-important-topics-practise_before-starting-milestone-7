const student1 = {
    name_a : "sakib khan",
    age3:80,
    moives:["king khan" ,"dhakar mastan"],
}

// ----JSON.stringify er maddome obj k strigified kora----------------------------
 const strigified = JSON.stringify(student1);

 console.log(strigified)//output:
 //  {"name_a":"sakib khan","age3":80,"moives":["king khan","dhakar mastan"]}