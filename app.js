const palindromeFunctions = require('./palindrome');

var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Palindrome app is running at port 3000");
});

app.get("/is_palindrome/:str", (req, res) => {
    const { str } = req.params
    res.json(palindromeFunctions.isPalindrome(str));
});

app.get("/longest_palindrome/:str", (req, res) => {
    const { str } = req.params
    res.json(palindromeFunctions.longestPalindrome(str));
});

app.get("/get_min_partition/:str", (req, res) => {
    const { str } = req.params
    res.json(palindromeFunctions.getMinPartition(str));
});