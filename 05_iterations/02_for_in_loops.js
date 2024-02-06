// -    -  for in loop on objects  -    -   //
// - prints index
const myObject ={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
    console.log(key); // prints key
}
for (const key in myObject) {
    console.log(myObject[key]); // prints value
}
for (const key in myObject) {
    console.log(`${key}:-${myObject[key]}`); // prints both key and value
}
//  -   -  for in on arrays  -  -   //
const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(key);
}
for (const key in programming) {
    console.log(programming[key]);
}

