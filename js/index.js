
function quadraticEquation(a, b, c) {
	const d = calcDiscr(a, b, c);
	if (d > 0) {
		const x1 = (-b + Math.sqrt(d))/(2*a);
		const x2 = (-b - Math.sqrt(d))/(2*a);
		return 'X1 = ' + x1 + 'X2 = ' + x2;
	} else if (d === 0){
		const x = (-b)/(2*a);
	return x;
	} else {
		return 'No solutions';
	}
}

function calcDiscr(a, b, c){
	const d = Math.pow(b)-4*a*c;
	return d;
}



const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const solutions = quadraticEquation(a, b, c);
alert(solutions);