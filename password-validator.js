const readline = require(`readline-sync`);

let password;
const minLength = 8;
const hasUpperCase = /[A-Z]/.test(password);
const hasNumber = /[0-9]/.test(password);
do {
    password = readline.question("Please Enter a Password that has at least 1 capital letter, 1 number, and is over 8 character in length:");

}while (password.length = minLength && hasUpperCase && hasNumber);
console.log("Password Accepted");
