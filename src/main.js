// object definition
const invoice = {
    id: 10,
    name: 'Office shopping',
    date: '2023-06-14',
    client: {
        id: 1,
        firstName: 'Jon',
        lastName: 'Doe',
        age: 21,
    },
    total: 100,
}

console.log(invoice)
console.log(invoice.client)

// modify the object
invoice.client.firstName = 'Crispy';
invoice.client.lastName = 'Roe';
console.log(invoice)
console.log(invoice.client)


// function in the object
const invoice2 = {
    id: 10,
    name: 'Office shopping',
    date: '2023-06-14',
    client: {
        id: 1,
        firstName: 'J',
        lastName: 'C',
        age: 21,
    },
    total: 100,
    greeting: function () {
        return `hi, ${this.client.firstName} ${this.client.lastName}`
    }
}

const saySomething = invoice2.greeting();
console.log(saySomething)

// narrow function in the object
const invoice3 = {
    id: 10,
    name: 'Office shopping',
    date: '2023-06-14',
    client: {
        id: 1,
        firstName: 'S',
        lastName: 'C',
        age: 21,
    },
    total: 100,
    greeting: () => {
        return `hi, ${invoice3.client.firstName} ${invoice3.client.lastName}`
    }
}

const saySomething2 = invoice3.greeting();
console.log(saySomething2)