var message = "Hello World";
console.log(message);
//
var x = [90, 'a', true];
var p;
(function (p) {
    p[p["small"] = 0] = "small";
    p[p["medium"] = 1] = "medium";
    p[p["large"] = 2] = "large";
})(p || (p = {})); //enum just shows the list of items
console.log(x[1], p.small);

