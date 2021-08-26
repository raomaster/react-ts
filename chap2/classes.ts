class Persona {
    constructor(public msg: string) {  
    }
    // msg: string;
    speak() {
        console.log(this.msg);
    }
}
const tom = new Persona("hello");
// tom.msg = "hello";
tom.speak();