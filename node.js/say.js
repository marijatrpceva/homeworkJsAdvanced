function hello(name) {
    return "hey there " + name
}

function bye(name) {
    return "Bye there " + name
}

// module.exports = hello

module.exports = {
    sayHi : hello,
    sayBye : bye
}