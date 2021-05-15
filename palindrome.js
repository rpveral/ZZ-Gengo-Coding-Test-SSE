// This function will get the longest palindrome by traversing the string from start to end and getting
// palindromes by starting at the 'center'
// Parameter: string s
// Return: longest found palindrome

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
    return s.substring(start, end + 1)
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
    if(s==='') {
        return false
    }
    for(i=0; i<Math.floor(s.length/2); i++) {
        if(s[i] !== s[s.length-i-1]) {
           return false
        }
    }
    return true
}

// This function will recursively compute for the minimum partition needed to divide a string into palindromic substrings
// getMinPartitions = 0 if the string is a palindrome, otherwise
// k will loop from i to j-1 inclusive and compute for minimum partitions
// getMinPartitions = getMinPartitions(string from i to k slice) + getMinPartitions(string from k slice + 1 to j) + 1 (initial slice)
// Parameters: string s, i position (substring start), j position (substring end)
// In the first call, the parameter can only include s, i and j are computed

function getMinPartition(s, i=0, j=s.length-1)
{
    let ans = Number.MAX_VALUE
    let count = 0

    if (isPalindrome(s.substring(i, j + 1)) || s==='')
        return 0
     
    for(let k = i; k < j; k++)
    {
        count = getMinPartition(s, i, k) + getMinPartition(s, k + 1, j) + 1;
        ans = Math.min(ans, count);
    }
    return ans
}

module.exports = {
    isPalindrome,
    longestPalindrome,
    getMinPartition
}
