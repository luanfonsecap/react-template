function calculateNumbers(numbers: number[]): number {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0);
}

export default calculateNumbers;
