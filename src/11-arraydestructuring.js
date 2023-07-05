const users = ['Anna', 'Barby', 'Claude', 'Dayana', 'Elise'];

const [anna, barby, claude, ...rest] = users;

console.log(anna, barby, claude)

console.log(...rest);