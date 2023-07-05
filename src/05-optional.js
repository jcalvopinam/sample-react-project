const invoice = {
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
        return `hi, ${invoice.client.firstName} ${invoice.client.lastName}`
    },
    total: () => {
        let total = 0;
        invoice.items.forEach(item => total += item.price * item.quantity);
        return total;
    },
}

// common validation
if (invoice.company != undefined && invoice.company.name) {
    console.log('Exist the company');
} else {
    console.log('Does not exist the company');
}

// simplify validation
if (invoice.company?.name) {
    console.log('Exist the company');
} else {
    console.log('Does not exist the company');
}

// simplify validation with mor object
console.log(invoice.client?.address?.street)