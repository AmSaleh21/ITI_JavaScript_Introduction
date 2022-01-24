
var len = Number(prompt("number of elements"));
var arr = [];
for (var i = 0; i < len; i++) {
    arr[i] = Number(prompt("enter #" + (i + 1) + " number"));
}
var sum = 0;
for (var i = 0; i < len; i++) {
    sum += arr[i];
}
alert("sum is " + sum + "  average is " + sum / len);