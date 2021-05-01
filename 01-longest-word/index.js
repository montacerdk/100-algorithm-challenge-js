const findLongestWord = (sentence) => {
  if (sentence && sentence.length) {
    const words = sentence.split(" ");
    if (words.length === 1) {
      return words[0];
    }
    let longest = "";
    for (let index = 0; index < words.length; index++) {
      if (words[index].length > longest.length) {
        longest = words[index];
      }
    }
    return longest;
  } else {
    return "Please, provide a valid sentence";
  }
};

const sentences = [
  "Yezzi m la3b",
  "JavaScript is an awesome language",
  "Good software is like wine, takes time",
];

sentences.forEach((sentence) => {
  console.log(findLongestWord(sentence));
});
