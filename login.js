let wrongCount = 0;

function validateForm() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (!email.includes("@")) {
        message.innerHTML = "Error: Email must contain @";
        wrongCount++;
        document.getElementById("count").innerHTML =
        "Wrong submission count: " + wrongCount;
        return false;
    }

    if (password.length < 6) {
        message.innerHTML = "Error: Password must be at least 6 characters";
        wrongCount++;
        document.getElementById("count").innerHTML =
        "Wrong submission count: " + wrongCount;
        return false;
    }

    if (!password.includes("#")) {
        message.innerHTML = "Error: Password must contain #";
        wrongCount++;
        document.getElementById("count").innerHTML =
        "Wrong submission count: " + wrongCount;
        return false;
    }

    message.innerHTML = "Login Successful!";
    return false;
}
console.log();