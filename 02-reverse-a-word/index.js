const reverseStringUsingForLoop = (string) => {
  const wordLength = string.length;
  if (typeof string === "string" && wordLength) {
    if (wordLength === 1) {
      return string;
    }
    let reversed = "";
    for (let index = wordLength - 1; index >= 0; index--) {
      reversed += string[index];
    }
    return reversed;
  }
  return "Please, provide a valid string";
};

const reverseString = (string) => {
  if (typeof string === "string" && string.length) {
    if (string.length === 1) {
      return string;
    }
    return string.split("").reverse().join("");
  }
  return "Please, provide a valid string";
};

const strings = ["Yezzitech", "mel", "la3b"];

strings.forEach((string) => {
  console.log(reverseStringUsingForLoop(string));
});
