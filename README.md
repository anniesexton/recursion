#Recursion

Here are two basic examples of recursion.

##Factorials

This accomplishes the same problem in Math:

**factorial(n) = factorial(n \* factorial(n - 1))**

**factorial(1) = 1**

**factorial(4) = 24** Because **factorial(4) = 4 \* 3 \* 2 \* 1**

```
function factorial(n) {
	if (n == 1) {
		return 1;
	} else {
		return n*factorial(n - 1);
	}
}
```

##Solution to the Tower of Hanoi Puzzle


```
function hanoi(disc, src, aux, dst) {
	if (disc > 0) {
		hanoi(disc - 1, src, dst, aux);
		document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst);
		document.writeln('<br>');
		hanoi(disc - 1, aux, src, dst);
	}
}
```