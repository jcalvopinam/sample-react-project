const user = {
    username: 'Juan',
    email: 'juan@example.com',
    age: 26,
    ranking: 9,
}

// getting data traditionally
// const username = user.username;
// const email = user.email;
// const age = user.age;

// console.log(`${username} is ${age} years old and his mail is ${email}`);

// getting data desescructured
const {username, email, age} = user;
console.log(`${username} is ${age} years old and his mail is ${email}`);