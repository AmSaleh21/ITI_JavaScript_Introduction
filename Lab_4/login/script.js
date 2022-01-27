function validate() {
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    if (userName == "") {
        showText("user name field cannot be empty");
    }
    else if (password == "") {
        showText("password field cannot be empty");
    }
    else if (userName == "admin" && password == "123") {
        showText("login success");
    } else {
        showText("login failed");
    }
}

function showText(text) {
    document.getElementById("validator-text").innerText = text;
    document.getElementById("validator-text").style.display = 'block';
}
