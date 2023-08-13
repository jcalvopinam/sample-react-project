export const dummyBilling = {
  id: 10,
  name: 'Componentes PC',
  client: {
    name: 'Pepe',
    lastName: 'Doe',
    address: {
      country: 'United States',
      city: 'Los Angeles',
      street: 'One Street',
      number: 12,
    },
  },
  company: {
    name: 'New Egg',
    fiscalNumber: 1234567
  },
  items: [
    {
      id: 1,
      product: 'CPU Intel i7',
      quantity: 1,
      price: 499,
      unitTotal: 0,
    },
    {
      id: 2,
      product: 'Corsair Keyboard mecánico',
      quantity: 1,
      price: 150,
      unitTotal: 0,
    },
    {
      id: 3,
      product: 'Monito Asus',
      quantity: 2,
      price: 350,
      unitTotal: 0,
    },
  ]
}
