const separator = '----------------------------------------------------------------\n';

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

console.log(separator + 'Invoice 1');
console.log(invoice)
console.log(invoice.client)

// modify the object
invoice.client.firstName = 'Crispy';
invoice.client.lastName = 'Roe';
console.log('Invoice modified')
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
    total: 101,
    greeting: function () {
        return `hi, ${this.client.firstName} ${this.client.lastName}`
    }
}

console.log(separator + 'Invoice 2');
console.log(invoice2.greeting())

// narrow function in the object
const invoice3 = {
    id: 7,
    name: 'Office shopping',
    date: '2023-06-17',
    client: {
        id: 1,
        firstName: 'Jay',
        lastName: 'C',
        age: 21,
    },
    items: [
        {
            product: 'keyboard',
            price: 399,
            quantity: 1,
        },
        {
            product: 'mouse   ',
            price: 199,
            quantity: 1,
        },
        {
            product: 'monitor ',
            price: 599,
            quantity: 1,
        },
        {
            product: 'papper   ',
            price: 0.99,
            quantity: 10,
        }
    ],
    greeting: () => {
        return `hi, ${invoice3.client.firstName} ${invoice3.client.lastName}`
    },
    printAsTable: () => {
        let title = 'product \t\t | quantity\t\t | unit price\t\t | total';
        console.log(separator + title + '\n' + separator);
        let total = 0;

        invoice3.items.forEach(item => {
            const itemList = `${item.product}\t\t | ${item.quantity}\t\t\t | ${item.price}\t\t\t\t | ${item.quantity * item.price}`;
            console.log(itemList);
            total += item.price * item.quantity;
        })
        console.log(separator);
        return `\t\t\t\t\t\t\t\t\t\t\t\t${total}\n${separator}`;
    },
    printAsRows: () => {
        let total = 0;

        invoice3.items.forEach(item => {

            const itemList = `
            product: ${item.product},
            quantity:${item.quantity},
            unit price: ${item.price},
            total: ${item.quantity * item.price}`;

            console.log(itemList);

            total += item.price * item.quantity;
        })
        return total;
    },
}
console.log(separator + 'Invoice 3');
console.log(invoice3.greeting());
console.log(`Total: ${invoice3.printAsTable()}`);
