function factorial(n) {
	if (n == 1) {
		return 1;
	} else {
		return n*factorial(n - 1);
	}
}
function hanoi(disc, src, aux, dst) {
	if (disc > 0) {
		hanoi(disc - 1, src, dst, aux);
		document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst);
		document.writeln('<br>');
		hanoi(disc - 1, aux, src, dst);
	}
}
document.writeln('<h1>Basic Factorial Function</h1>');
document.writeln('<br>');
document.writeln(factorial(4));
document.writeln('<h1>The Tower of Hanoi: Solution for 4 Discs</h1>');
document.writeln('<br>');
hanoi(4, 'A', 'B', 'C');
