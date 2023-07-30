username = prompt("Введите своё имя: ");
alert(greeting(username));


function greeting(name) {
    console.log(`Привет, ${name}!`);
    return `Привет, ${name}`;
}