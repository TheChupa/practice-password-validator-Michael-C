const readline = require(`readline-sync`);

let password ="";
let isValid = false;

while(!isValid){
    password = readline.question("Enter a password: ", {hideEchoBack:true});

    let hasUpperCase = false;
    let hasNumber = false;
    let length = password.length;

    for (let i =0; i < length; i++){
        let char = password[i];
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        }
        if (char >= '0' && char <= '9') {
            hasNumber =true;
        }
    }   

        if (length >= 8 && hasUpperCase && hasNumber) {
        isValid = true;
    }else {
    console.log("Password must be at least 8 characters long, contain at least on uppercase letter, and one number.");
    }
}

console.log("Password Successfull set!");