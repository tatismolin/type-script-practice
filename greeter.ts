class Student { // TypeScript supports Classes
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person { // interface describes an Object.
    firstName: string;
    lastName: string
}

function greeter(person: Person) { // type annotation is a way to record the intended contract of the function or variable.
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);