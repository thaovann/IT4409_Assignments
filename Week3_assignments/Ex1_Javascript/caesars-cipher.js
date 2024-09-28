function rot13(str) {
  let res = "";
  for(let i = 0; i < str.length; i++){
    let char = str.charAt(i);

    if(str.charAt(i) >= "A" && str.charAt(i) <= "Z"){
      let code = str.charCodeAt(i);
      let newCode = ((code - 65 + 13)%26) + 65;
      res+= String.fromCharCode(newCode);
    }
    else{
      res += char;
    }
  }
  return res;
}

rot13("SERR PBQR PNZC");