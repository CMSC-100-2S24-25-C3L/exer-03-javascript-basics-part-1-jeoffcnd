// https://www.geeksforgeeks.org/reverse-a-string-in-javascript/
function reverseString(str) {

    let reversedstring = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedstring += str[i];
    }
    return reversedstring;
}

// https://www.geeksforgeeks.org/how-to-iterate-over-characters-of-a-string-in-javascript/

function passwordChecker(str) {

    if (str.length < 8) {
        // if less than 8, automatic not valid
        console.log("Length of string is less than 8.");
        return false;
    }

    let hasNumbers = false;
    let hasUppercase = false;
    let hasLowercase = false;

    for (let i = 0; i < str.length; i++) {

        if (str[i] >= '0' && str[i] <= '9') {
            // if it contains 0-9 (or number)
            hasNumbers = true;
        }
        if (str[i] >= 'a' && str[i] <= 'z') {
            // if it contains a-z (or lowercase letter)
            hasLowercase = true;
        }
        if (str[i] >= 'A' && str[i] <= 'Z') {
            // if it contains A-Z (or uppercase letter)
            hasUppercase = true;
        }

        
        if (hasNumbers == true && hasLowercase == true && hasUppercase == true) {
            break;
        }

    }

    if (!hasNumbers || !hasUppercase || !hasLowercase) {
        // kapag merong hindi na satisfy, ibig sabihin, not valid
        console.log("The password does not meet all requirements.");
        return false;
    }

    return true; // valid or nasatisfy lahat ng requirements
}


function storePassword(name, pass1, pass2) {
    let newpw;
    // if valid pw, newpw = reverse pass1
    // else, newpw = pass1

    

    return {
        name: name,
        newpw: newpw
    }
}



storePassword("John", "Pass1234", "Pass1234");
storePassword("John", "Pass123", "Pass12345");
