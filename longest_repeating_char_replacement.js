var characterReplacement = function(s, k) {
    let maxLength = 0
    let left = 0
    let count = {}

    for (let right=0; right<s.length; right++) {
        const char = s[right]
        count[char] = (count[char] || 0) + 1
        const maxCount = Math.max(...Object.values(count))
        console.log(Object.values(count))
        console.log(Math.max(...Object.values(count)))
        if(right - left + 1 - maxCount > k) {
            count[s[left]]--
            left++
        }
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
};

console.log(characterReplacement('AABABBA', 1))