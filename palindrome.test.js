const palindromeFunctions = require('./palindrome');

describe("Palindrome Test", () => {
    test('empty string', () => {
        expect(palindromeFunctions.isPalindrome('')).toBe(false);
      });

    test('single character', () => {
      expect(palindromeFunctions.isPalindrome('a')).toBe(true);
    });

    test('even palindrome', () => {
        expect(palindromeFunctions.isPalindrome('aabbaa')).toBe(true);
    });

    test('odd palindrome', () => {
        expect(palindromeFunctions.isPalindrome('aabaa')).toBe(true);
    });

    test('long palindrome', () => {
        expect(palindromeFunctions.isPalindrome('aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa')).toBe(true);
    });

    test('not a palindrome', () => {
        expect(palindromeFunctions.isPalindrome('abcde')).toBe(false);
    });
})

describe("Longest Palindrome Test", () => {
    test('empty string', () => {
        expect(palindromeFunctions.longestPalindrome('')).toBe('');
    });

    test('single character', () => {
        expect(palindromeFunctions.longestPalindrome('a')).toBe('a');
    });

    test('two characters', () => {
        expect(palindromeFunctions.longestPalindrome('ab')).toMatch(/^a|b$/);
    });

    test('many two character palindromes', () => {
        expect(palindromeFunctions.longestPalindrome('abbcaa')).toMatch(/^aa|bb$/);
    });

    test('even substring palindrome', () => {
        expect(palindromeFunctions.longestPalindrome('zzabbacc')).toBe('abba');
    });

    test('odd substring palindrome', () => {
        expect(palindromeFunctions.longestPalindrome('zzabcbacc')).toBe('abcba');
    });

    test('palindrome containing a single character', () => {
        expect(palindromeFunctions.longestPalindrome('aaaaaaaaaaaaaaaaaaaa')).toBe('aaaaaaaaaaaaaaaaaaaa');
    });

})

describe("Minimum Partition Test", () => {
    test('empty string', () => {
        expect(palindromeFunctions.getMinPartition('')).toBe(0);
    });

    test('palindrome string', () => {
        expect(palindromeFunctions.getMinPartition('aba')).toBe(0);
    });

    test('two palindrome substring', () => {
        expect(palindromeFunctions.getMinPartition('ababab')).toBe(1);
    });

    test('three different character string', () => {
        expect(palindromeFunctions.getMinPartition('abc')).toBe(2);
    });

    test('a string with two slices', () => {
        expect(palindromeFunctions.getMinPartition('abaccccccdccc')).toBe(2);
    });

    test('a string with five slices', () => {
        expect(palindromeFunctions.getMinPartition('abcdef')).toBe(5);
    });
})