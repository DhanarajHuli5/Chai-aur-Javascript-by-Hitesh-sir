//  -   -  FOR OF LOOP  -    -   //
// -cannot iterate on objects
// -prints values

// for of loop on arrays
const arr=[1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}

// for of loop on strings
const str = "abc def"

for (const num of str) {
    //if(num != 'b') console.log(num);
}


//  -   -  MAPS  -  -   //
const map = new Map()
map.set('IN',"india")
map.set('USA',"United States of America")
map.set('FR',"France")

//console.log(map);

for (const keys of map) {
    console.log(keys);
}

// print seperat keys and values
// first element is key, second is value
for (const [values,key] of map) {
    //console.log(`${values} : ${key}`);
}

//  -   -  for of on OBJECTS -  -   //

const myObject={
    'game1':'NFS',
    'game2':'Spederman'
}

// for (const [key,value] of myObject) {
//     //console.log(`${values} : ${key}`); // => cannot use (for of) on objects
// }