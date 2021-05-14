// This function will 

const longestPalindrome = (s) => {   
    if(s.length === 0)
        return ""

    let start = 0
    let end = 0
    
    for(i=0; i < s.length; i++) {
        let len1 = expandFromCenter(s, i, i)
        let len2 = expandFromCenter(s, i, i+1)
        let len = Math.max(len1, len2)
        if(len > end - start) {
            start = i - Math.floor((len - 1)/2)
            end = i +  Math.floor(len/2)
        }
    }
    return s.substring(start, end+1)
}

const expandFromCenter = (s, left, right) => {
    if(s === null || left > right)
        return 0
    while(left >=0 && right < s.length && s[left] === s[right]) {
        left--
        right++
    }
    
    return right - left - 1
}


// This function will check if a string is a palindrome by comparing the characters from the beginning and end
// then moving one character at a time to the center of the string
// Parameter: string s
// Return: true (s is a palindrome), false (s is not a palindrome)

const isPalindrome = (s) => {
    let isPalin = true
    if(s==='') {
        isPalin = false
    }
    for(i=0; i<Math.floor(s.length/2); i++) {
        if(s[i] !== s[s.length-i-1]) {
            isPalin = false
            break
        }
    }

    return isPalin
}

module.exports = {
    isPalindrome,
    longestPalindrome
}
