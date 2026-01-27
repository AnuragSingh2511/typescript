// JS first then TS

/*
Addon
TS -> process -> JS
Type-check
Consistency

Checker isn't in javascript ..it is in TS
*/

function greet(name: string): string {
    return `Hello ${name}`
}

console.log(greet("anu"));
// console.log(greet(42));
