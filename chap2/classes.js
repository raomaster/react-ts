var Persona = /** @class */ (function () {
    function Persona(msg) {
        this.msg = msg;
    }
    // msg: string;
    Persona.prototype.speak = function () {
        console.log(this.msg);
    };
    return Persona;
}());
var tom = new Persona("hello");
// tom.msg = "hello";
tom.speak();
