const products = ['something', 'iPad', 'iPhone', 'iMac', 'macBook', 'miniMac'];
console.log(`Products:\n${products}`)

// add elements to the array
products.push('iPad Pro', 'macBookPro', 'somethingPro');
console.log(`Add products:\n${products}`)

// remove an specific element from the array
const index = products.indexOf('miniMac');
products.splice(index, 1);
console.log(`Remove product ${index} from:\n${products}`)

//remove the first elements from the array
products.shift();
console.log(`Remove first products:\n${products}`)

//remove the last elements from the array
products.pop();
console.log(`Remove last products:\n${products}`)

// adds one or more elements to the beginning of the array
products.unshift('tablet', 'mobile');
console.log(`Add 2 elements at the beginning:\n${products}`)

const brands = ['android', 'iOS']
console.log(`Brands:\n${brands}`)

// merges two or more arrays into a new array
const technology = brands.concat(products);
console.log(`Merge brands and products:\n${technology}`)

// converts the elements of the array into a string separated by a specified delimiter
const arrayToString = technology.join(';');
console.log(`join:\n${arrayToString}`)

// reverses the order of the elements in the array
console.log(`reverse:\n${technology.reverse()}`)

// sorts the elements of the array
console.log(`reverse:\n${technology.sort()}`)

const filterElements = technology.filter(product => product.includes('macBook'));
console.log(`filter elements:\n${filterElements}`)