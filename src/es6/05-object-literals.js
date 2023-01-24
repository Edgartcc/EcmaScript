// enhanced objects literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId,
}
}

console.log(newUser("gndx", 30, 'EC', 1));