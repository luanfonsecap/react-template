import calculateNumbers from '../calculate';

describe('Calculate utils function test', () => {
  it('should be able to return the correct sum', () => {
    expect(calculateNumbers([1, 2])).toBe(3);
  });
});
