const titleCase = (sentence) => {
  if (typeof sentence === "string") {
    return sentence
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(" ");
  }
  return "Please, provide a valid string";
};

const sentences = ["Yezzi mEl la3b", "let's git started", "i luv javaScript"];

sentences.forEach((sentence) => {
  console.log(titleCase(sentence));
});
