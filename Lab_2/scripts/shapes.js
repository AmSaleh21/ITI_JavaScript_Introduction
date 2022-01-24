

function Area(fun) {
    var area = fun();
    alert(area);
}

function circleArea() {
    var radius = prompt("enter the radius of the circle");
    var area = radius * radius * Math.PI;
    return area;
}

function triangleArea() {
    var h = prompt("enter the height of the triangle");
    var b = prompt("enter the base of the triangle");
    return (0.5 * h * b);
}

function rectangleArea() {
    var h = prompt("enter the height of the rectangle");
    var w = prompt("enter the width of the rectangle");
    return (h * w);
}


var stop = true;
while (stop) {
    var op = prompt("enter the shape to calculate it's area\n circle, triangle, rectangle, exit to exit");
    switch (op) {
        case "circle":
            Area(circleArea);
            break;
        case "triangle":
            Area(triangleArea);
            break;
        case "rectangle":
            Area(rectangleArea);
            break;
        case "exit":
            stop = false;
            break;
        default:
            alert("bad entry try again");
            break;
    }
}