var flag = true;
var sum = Number(prompt("number"));
do{
    var op  = prompt("Operation \nsum, sub, mult, div, mod, close");
    switch (op){
        case "sum":
            var num = Number(prompt("second number"));
            sum += num;
            break;
        case "sub":
            var num = Number(prompt("second number"));
            sum -= num;
            break;
        case "mult":
            var num = Number(prompt("second number"));
            sum *= num;
            break;
        case "div":
            var num = Number(prompt("second number"));
            sum /= num;
            break;
        case "mod":
            var num = Number(prompt("second number"));
            sum %= num;
            break;
        case "close":
            flag = false;
            break;
        default:
            alert("bad operation");
            break;
    }
    alert(sum);
}while(flag)