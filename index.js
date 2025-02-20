// https://www.geeksforgeeks.org/reverse-a-string-in-javascript/
// https://www.w3schools.com/js/js_let.asp
function reverseString(str) {

    let reversed = ""; // empty
    for (let i = str.length - 1; i >= 0; i--) { // start from the end
        // append from the given string
        reversed += str[i];
    }
    return reversed; // return the reverse string
}

// https://www.geeksforgeeks.org/how-to-iterate-over-characters-of-a-string-in-javascript/

function passwordChecker(str) {
    // it checks if it all satisfies the given condition

    // check muna if length is 8+
    if (str.length < 8) {
        // if not 
        console.log("Length of string is less than 8."); 
        return false; // return false
    }

    let hasNumbers = false;
    let hasUppercase = false;
    let hasLowercase = false;

    for (let i = 0; i < str.length; i++) {

        if (str[i] >= '0' && str[i] <= '9') {
            hasNumbers = true;
        }
        if (str[i] >= 'a' && str[i] <= 'z') {
            hasLowercase = true;
        }
        if (str[i] >= 'A' && str[i] <= 'Z') {
            hasUppercase = true;
        }

        
        if (hasNumbers == true && hasLowercase == true && hasUppercase == true) {
            break;
        }

    }

    if (!hasNumbers || !hasUppercase || !hasLowercase) {
        console.log("The password does not meet all requirements.");
        return false;
    }

    return true;
}



function validPassword(pass1, pass2) {
    if (pass1 !== pass2) {
        console.log("Password 1 and password 2 are not the same.");
        return false;
    }

    if (!passwordChecker(pass1)) {
        return false;
    }

    return true;
}


function storePassword(name, pass1, pass2) {
    let newpw;

    // https://www.geeksforgeeks.org/check-if-a-variable-is-a-string-using-javascript/
    if (typeof pass1 !== "string" || typeof pass2 !== "string") {
        if (typeof pass1 !== "string") {
            console.log("Password 1 is not a string.");
        }

        if (typeof pass2 !== "string") {
            console.log("Password 2 is not a string.");
        }

        return false; 
    }

    if (validPassword(pass1, pass2)) {
        newpw = reverseString(pass1); // reverse pw if valid
    } else {
        newpw = pass1; // pass1 pa rin if not valid
    }

    return {
        name: name,
        newpw: newpw
    };
}

// Test cases
console.log(storePassword("John", "Pass1234", "Pass1234")); 
console.log(storePassword("John", "Pass123", "Pass12345"));   
