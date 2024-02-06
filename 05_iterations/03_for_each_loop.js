const coding = ["js", "ruby", "java", "python", "cpp"]

// method 1
//coding.forEach( (item) => console.log(item) )

//method 2

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)


//method 3
// parameter can contain -> item,index,array 
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

//  -   -  for each on array of objects  -  -   //
const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"java",
        languageFileName:"java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )