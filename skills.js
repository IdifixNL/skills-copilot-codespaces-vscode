function calculateNumbers(var1, var2) {
    if(typeof var1 !== 'number' || typeof var2 !== 'number') {
        throw new Error('Both inputs must be numbers');
    }
    return var1 + var2;
}