// clasic function
function sayHello(firstName = 'JC', age = 0) {
    const greeting = `Hello ${firstName} ${age}`;
    return greeting;
}

const result = sayHello('', 12);
console.log(result);


// anonymous function
const sayGoodbye = function (name = 'JC') {
    return `Goodbye ${name} `
}
console.log(sayGoodbye());


// narrow function
const saySomething = (name = 'JC', age = 0) => `Say something ${name} ${age}`;
console.log(saySomething());


// ----------------------------------------------------------------
// clasic
function clasicSum(a = 0, b = 0) {
    return a + b;
}
console.log(clasicSum());
console.log(clasicSum(1, 1));


//anonymous function
const anonymousSum = function (a = 0, b = 0) {
    return a + b;
}
console.log(anonymousSum());
console.log(anonymousSum(2, 3));

// narrow function
const narrowSum = (a = 0, b = 0) => a + b;
console.log(narrowSum())
console.log(narrowSum(3, 4))
