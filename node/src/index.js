const fiboLoop = 51;

function fib(number) { 
    let n1 = 0;
    let n2 = 1;
    let current;

    if (number === 0) {
        return 1;
    }

    for (let i = 0; i < number; i++) { 
        current = n1 + n2;
        n1 = n2;
        n2 = current;    
    }

    return current;
}

for (let i = 0; i <= fiboLoop; i++) {
    const res = fib(i);
    console.log(`fib(${i}) = ${res}`);
}