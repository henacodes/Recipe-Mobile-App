export default (word, wordCount) => {
  if (word.length >= wordCount + 1) {
    const newWord = word.slice(0, wordCount);
    return newWord + " ...";
  } else {
    return word;
  }
};
