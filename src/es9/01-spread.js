const user = { username: 'edgar', age: 34, country: 'EC'};
const { username, ...values} = user;
console.log(username);
console.log(values);