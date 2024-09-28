function palindrome(str) {
  let copy = "";
  let s = str.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if ((char >= "A" && char <= "Z") || (char >= "0" && char <= "9")) {
      copy += char;
    }
  }
  for (let i = 0; i < Math.floor(copy.length / 2); i++) {
    if (copy.charAt(i) !== copy.charAt(copy.length - i - 1)) {
      return false;
    }
  }
  
  return true;
}


palindrome("eye");