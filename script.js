function fibonacci(num) {
	let n1 =0; 
	let n2 =1;
	let nextterm;
for(let i=0; i<=num; i++){
	nextterm = n1+n2;
	n1= n2;
	n2 = nextterm;
	return: n1;
	
	
}
}

module.exports = fibonacci;
