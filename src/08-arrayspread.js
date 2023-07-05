const products = ['tablet', 'iPad', 'iPhone', 'iMac', 'macBook', 'miniMac'];
console.log(`Products:\n${products}`)

const brands = ['android', 'iOS']
console.log(`Brands:\n${brands}`)

const devices = ['pendrive', 'monitor']

const technologies = [...products, ...brands, ...devices, 'something else']
console.log(`Technologies:\n${technologies}`)