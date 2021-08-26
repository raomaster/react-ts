var a = 5;
var b = 6;
console.log(a + b);
function canDrive(usr) {
    console.log("user is", usr.name);
    if (usr.age >= 16) {
        console.log("allow to drive");
    }
    else {
        console.log("Do not allow to drive");
    }
}
var tom = {
    name: "Tom",
    age: 19
};
canDrive(tom);
