var getHint = function(secret, guess) {
    let bulls = 0
    let cows = 0

    let counts = new Array(10).fill(0)

    for(let i=0; i<secret.length; i++) {
        let s = secret[i]
        let g = guess[i]

        if(s==g) {
            bulls++
        } else {
            if(counts[s] < 0) cows++
            if(counts[g] > 0) cows++

            counts[s]++
            counts[g]--
        }
    }
    return `${bulls}A${cows}B`
};