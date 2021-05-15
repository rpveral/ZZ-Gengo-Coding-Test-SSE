# ZZ-Gengo-Coding-Test-SSE

Functions:

isPalindrome

This function will check if a string is a palindrome by comparing the characters from the beginning and end
then moving one character at a time to the center of the string
Parameter: string s
Return: true (s is a palindrome), false (s is not a palindrome)

Complexity: 
time - O(n), space - O(1)


longestPalindrome

This function will get the longest palindrome by traversing the string from start to end and getting
palindromes by starting at the 'center'
Parameter: string s
Return: longest found palindrome

Complexity:
time - O(n^2), space - O(1)


getMinPartitions

This function will recursively compute for the minimum partition needed to divide a string into palindromic substrings
getMinPartitions = 0 if the string is a palindrome, otherwise
k will loop from i to j-1 inclusive and compute for minimum partitions
getMinPartitions = getMinPartitions(string from i to k slice) + getMinPartitions(string from k slice + 1 to j) + 1 (initial slice)
Parameters: string s, i position (substring start), j position (substring end)
In the first call, the parameter can only include s, i and j are computed

Complexity
time - O(2^n), space - O(n)


Testing

There are jest unit tests created for the functions.
To run the test:
npm test


API

Three API endpoints are created to access the palindrome functions:
is_palindrome
longest_palindrome
get_min_partition

Using api tool (like Postman), call should be:
http://[url]/[function]/[string]
i.e.
http://localhost:3000/get_min_partition/abababbbbbbbbc

To run the api:
node app

