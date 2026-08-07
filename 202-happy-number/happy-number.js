/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let map={};
    while(n!=1)
    {
        let current=n;
        let sum=0;
        while(current!=0)
        {
            sum+=(current%10)**2;
            current=Math.floor(current/10);
        }
        if(map[sum])
        {
            return false;
        }
        map[sum] = true;
        n=sum;

        }
    
    return true;
};