function multiplyPrimeNumbers(number)
{
    let multiplyPrimeNumbers = 1, notPrimes = [];
    for (i = 2; i <= number; ++i)  // 2 is the lowest prime
    {
        if (!notPrimes[i])  // check if that number has been marked as not prime
          {
            multiplyPrimeNumbers = multiplyPrimeNumbers * i;
            for ( j = 2 * i; j <= number; j += i)  // this is marking new "not primes" above our current prime
            {
                notPrimes[j] = true;
            }
        }
    }
    return multiplyPrimeNumbers;
}

console.log(multiplyPrimeNumbers(10));

// this algorith used
/* https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes */