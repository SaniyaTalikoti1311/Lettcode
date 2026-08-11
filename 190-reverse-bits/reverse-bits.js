/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let result = 0;
    for(let i=0;i<32;i++)
    {
        let lastbit = n&1;
        let reversebit = lastbit <<(31-i);
        result = result | reversebit;
        n = n>>>1;

    }
    return result >>> 0;
};