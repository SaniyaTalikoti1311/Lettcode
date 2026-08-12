/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count =0;
    while(n!==0)
    {
        let isone = n & 1;
        if(isone===1)
        count++;
        n=n>>>1;
    }
    return count;
};
/*n ke sabse right wale bit ko check karna.*/