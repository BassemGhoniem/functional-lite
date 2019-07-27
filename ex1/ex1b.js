function F(x, y) {
	var z
	foo(x)
	return [y, z];
	function foo(x) {
		y++;
		z = x * y;
	}
}

var y = 5, z;

console.log(F(20, 5));

console.log(F(25, 6));
console.log(y, z);