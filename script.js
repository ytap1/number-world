// Optimized Prime Check
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Optimized Factor Calculation
function getFactors(num) {
    const factors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            factors.push(i);
            if (i !== num / i) factors.push(num / i);
        }
    }
    return factors.sort((a, b) => a - b);
}

// Example Usage:
console.log(isPrime(29)); // true
console.log(getFactors(28)); // [1, 2, 4, 7, 14, 28]