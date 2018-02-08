function palindrome(str) {
  a = str.toLowerCase();
  b = a.replace(/[^A-Z0-9]+/ig, "");
  c = b.split("").reverse().join("");
  return b === c;
}

palindrome("eye");
