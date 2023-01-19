/* function newUser(name, age, country) {
    var name = name || "Edgar";
    var age = age || 34;
    var country = country || "EC";
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'CO') */

function newAdmin(name = 'Edgar', age = 32, country = 'EC') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');