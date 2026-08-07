/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map1 =new Map();
    let map2 = new Map();

    let words=s.split(" ");

    if(pattern.length!==words.length)
    return false;
    for(let i=0;i<pattern.length;i++)
    {
         
       if (map1.has(pattern[i]) && map1.get(pattern[i]) !== words[i])
       {
            return false;

       }
       else if (map2.has(words[i]) && map2.get(words[i]) !== pattern[i])
       {
        return false;
       }
       map1.set(pattern[i],words[i]);
       map2.set(words[i],pattern[i]);
}
return true;
};