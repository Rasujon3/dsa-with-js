function charCOunt(str) {
  let charList = {};

  str = str
    .toLowerCase()
    .split(" ")
    .join("")
    .trim()
    .match(/[a-zA-Z]/g);

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // console.log(char);

    if (charList[char] > 0) {
      charList[char]++;
    } else {
      charList[char] = 1;
    }
  }
  return charList;
}

console.log(charCOunt("Hello Everyone!!"));
