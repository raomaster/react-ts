let a: number = 5
let b: number = 6
console.log(a + b)

interface User {
    name: string,
    age: number
}


function canDrive(usr) {
    console.log("user is", usr.name)

    if(usr.age >= 16) {
        console.log("allow to drive")
    } else {
        console.log("Do not allow to drive")
    }
}

const tom = {
    name: "Tom",
    age: 19
}
canDrive(tom)