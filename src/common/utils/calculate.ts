export default (numbers: number[]) => {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0);
};
