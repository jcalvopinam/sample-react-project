const papper = {
    product: 'papper',
    price: 0.99,
    quantity: 10,
};

const invoices = [
    {
        id: 1,
        name: 'Office shopping',
        client: {
            firstName: 'Anna',
            lastName: 'B.',
        },
        items: [
            {
                product: 'chair',
                price: 799,
                quantity: 1,
            },
            {
                product: 'table ',
                price: 399,
                quantity: 1,
            },
            papper
        ],
    },
    {
        id: 2,
        name: 'Computer shopping',
        client: {
            firstName: 'Jay',
            lastName: 'C.',
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
                price: 699,
                quantity: 1,
            },
            {
                product: 'cpu     ',
                price: 0.99,
                quantity: 100,
            }
        ],
    },
    {
        id: 3,
        name: 'Papper shopping',
        client: {
            firstName: 'Abbu',
            lastName: 'D.',
        },
        items: [
            {
                product: 'book',
                price: 19,
                quantity: 2,
            },
            {
                product: 'folder   ',
                price: 3,
                quantity: 5,
            },
            {
                product: 'pencil ',
                price: 2,
                quantity: 7,
            },
            papper,
        ],
    }
];

const invoicesName = invoices.map(invoice => {
    return invoice.name;
})
console.log(invoicesName);

const invoicesClient = invoices.map(invoice => invoice.client.firstName);
console.log(invoicesClient);

const invoicesByName = invoices.find(invoice => invoice.client.firstName === 'Anna')
console.log(invoicesByName);

const invoiceFilter = invoices.filter(invoice => invoice.items.includes(papper));
console.log(invoiceFilter);

const result = invoices.some(invoice => invoice.client.firstName === 'Abbu')
console.log(result);