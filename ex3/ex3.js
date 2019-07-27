function increment(x) { return x + 1; }
function decrement(x) { return x - 1; }
function double(x) { return x * 2; }
function half(x) { return x / 2; }



function compose(...args) {
    return args.reduce((prev, curr) => {
        return function(x) {
            return prev(curr(x));
        }
    });
}

function pipe(...args) {
    return compose(...args.reverse());
}

var f = compose(decrement,double,increment,half);
var p = pipe(half,increment,double,decrement);

console.log(f(3) === 4);

console.log(f(3) === p(3));
// true
