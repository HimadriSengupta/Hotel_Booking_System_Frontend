function valid() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = document.getElementById("n3").value;
    var d = document.getElementById("n4").value;
    var e = document.getElementById("n5").value;
    var checkbox = document.getElementById("n6");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (a === "" || b === "" || c === "" || d === "" || e === "") {
        alert("All fields are mandatory");
        return false;
    } else if (!emailRegex.test(b)) {
        alert("Please enter a valid email address");
        return false;
    } else if (c.length !== 10) {
        alert("Number should be exactly 10 digits. Please enter a valid number.");
        return false;
    } else if (isNaN(c)) {
        alert("Only numbers are allowed. Please enter a valid number.");
        return false;
    } else if (!validatePassword(d)) {
        alert("Your password should be at least 8 characters long, contain one uppercase letter, one lowercase letter, one digit, and one special character (@, #, &, $).");
        return false;
    } else if (d !== e) {
        alert("Please enter the same password in both fields.");
        return false;
    } else if (!checkbox.checked) {
        alert("Please click the check box ");
        return false;
    }
    //  else {
    //     true;
    // }
    return true;
}

function validatePassword(password) {
    // Password must be at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Password must contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Password must contain at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Password must contain at least one digit
    if (!/\d/.test(password)) {
        return false;
    }

    // Password must contain at least one of the specified special characters: @, #, &, or $
    if (!/[@#&$]/.test(password)) {
        return false;
    }

    // Password is valid
    return true;
}

