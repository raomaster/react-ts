class Person{
    name: string
}

const jill: {name:string} = {
    name: "Jill"
}

const person: Person = jill
console.log(person)


// Literal types

let literal: "tom" | "linda" | "jeff" | "sue" = "linda";
literal = "sue";
console.log(literal);

//Type Aliases
type ComplexPerson = {
    name: string,
    age: number,
    birthday: Date,
    married: boolean,
    address: string
}



