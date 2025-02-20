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
        // for loop for checker of each character in the given string

        if (str[i] >= '0' && str[i] <= '9') {
            // if meron nakita 0-9
            hasNumbers = true;
        }
        if (str[i] >= 'a' && str[i] <= 'z') {
            // if meron nakita lowercase
            hasLowercase = true;
        }
        if (str[i] >= 'A' && str[i] <= 'Z') {
            // if meron nakita uppercase
            hasUppercase = true;
        }

        
        if (hasNumbers == true && hasLowercase == true && hasUppercase == true) {
            // if satisfied lahat ng conditions, stop na sa loop
            break;
        }

    }

    // if atleast 1 meron ndi nasatisfy, ibig sabihin ndi na hit all reqs (NOT VALID)
    if (!hasNumbers || !hasUppercase || !hasLowercase) {
        console.log("The password does not meet all requirements.");
        return false; // return false
    }

    return true; // return true
}



function validPassword(pass1, pass2) {

    if (pass1 !== pass2) {
        // if hindi same ung pass1 and pass2 automatic false na siya
        console.log("Password 1 and password 2 are not the same.");
        return false;
    }

    // pero if pumasa, ccheck mo if valid ba ung pagkakainput ng password

    if (!passwordChecker(pass1)) {
        return false; 
    }

    return true; // valid
}


function storePassword(name, pass1, pass2) {
    let newpw;

    
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
    }
    
    else {
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
