// https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
export const shuffle = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};
