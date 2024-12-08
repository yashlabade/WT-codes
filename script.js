function validate() {
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password1")
    var isValid = true;
    if (!/^[a-zA-Z]+$/.test(name)){
        alert("Enter Valid Name.");
        isValid = false;
    }


    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]$/;
    if (email === "" || !email.match(emailPattern)) {
        alert("Enter a Valid email.");
        isValid = false;
    }


    if (!/^[A-Za-z]+@\{8}$/.test(password)) {
        alert("Enter a valid 10-digit password.");
        isValid = false;
    }

    
    return isValid;
}