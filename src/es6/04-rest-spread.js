// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);

// Object destructuring

let user = { username: 'Edgar', age : 34};
let {username, age } = user;
console.log(username, age);

// spread operator

let person = {name: 'Edgar', age: 22};
let country = 'EC';

let data = { ...person, country };
console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0]
}

sum (1, 1, 2, 3)