const user = {
    username: 'Juan',
    email: 'juan@example.com',
    age: 26,
    ranking: 9,
}

// getting data desescructured by function
const details = ({ username, email, age }) => {
    return `${username} is ${age} years old and his mail is ${email}`;
};

console.log(details(user));