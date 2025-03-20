//slice the last four characters
let b ='extravaganza';
console.log(b.slice(7));

//insert "eat"at the fourth index
const food = "The quick fox jumped over the lazy dog";
let foodTwo =food.slice(0,4)+"eat" + food.slice(4);
console.log({foodTwo});

//count how many times "the","brown"appears
const story = "The quick brown fox jumped over the lazy dog";
let storyLower= story.toLowerCase();
count= storyLower.split("the").length-1;
console.log(count);
count= storyLower.split("brown").length-1;
console.log(count);
//find if string contains"are"
const stringOne = "The pupils are reading in the library";
let a= stringOne.includes("are");
console.log(a);

//find if string contains"sitting"
const stringTwo = "The child was sitting on the table before it fell";
let c= stringTwo.includes("sitting");
console.log(c);
//convert to UpperCase, LowerCase,TitleCase
//UpperCase
let f ='wonderful';
console.log(f.toUpperCase());
//LowerCase
let g='amazing';
let h='UndERneath';
console.log(g.toLowerCase());
console.log(h.toLowerCase());
//Tittlecase
let w='A wonderful world';

console.log(w.split(" ").map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(" "));