function foo(x) {
	y++;
	z = x * y;
}

var y = 5, z;
function F(x, currY) {
	var [origY, origZ] = [y, z];
	y = currY;
	foo(x)
	var [newZ, newY] = [z, y];
	[y, z] = [origY, origZ]
	return [newY, newZ];
}

console.log(F(20, y));

console.log(F(25, y + 1));

console.log(y, z);