const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "hitesh@gmail.com",
    fullName: {
        userFullname:{
            firstName:"hitesh",
            lastName:"choudhary"
        }
    }
    
}
//console.log(regularUser.fullName.userFullname.firstName);

//     -  -  MERGE OBJECTS  -  -       // 

const obj1 = {
    1:'a',
    2:'b',
    3:'c'
}
const obj2 = {
    4:'d',
    5:'e',
    6:'f'
}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

//      -   - Array of Objects -    -   //
const users =[
    {
        id:1,
        email:"h@gmail0.com"
    },
    {
        id:1,
        email:"h@gmail1.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]
//console.log(users[0].email);

//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//  -   - object destruction -  -   //

const course={
    coursename : "js in hindi",
    price:"999",
    courseInstructor: "hitesh"
}
// console.log(course.courseInstructor); OR
const {coursename:ins} = course
console.log(ins); 
const day =[]