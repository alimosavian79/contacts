import { alphabet } from "@/utils/constants.js";
const getSectionsByLetter = array => {
  if (array.length === 0) {
    return [];
  }
  return Object.values(
    array.reduce((acc, word) => {
      let firstLetter = word.name.last[0].toLocaleUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = {
          title: firstLetter.toLowerCase(),
          data: [word],
        };
      } else {
        acc[firstLetter].data.push(word);
      }
      return acc;
    }, {})
  ).filter(item => alphabet.includes(item.title.toLowerCase()));
};

export default getSectionsByLetter;
