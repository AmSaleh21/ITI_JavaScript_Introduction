var userName = prompt("enter the user name");
if(userName == "admin"){
    var password = prompt("enter your password");
    if(password == "421$$"){
        alert("login success");
    }else {
        alert("password incorrect");
    }
}else {
    alert("user name incorrect");
}
