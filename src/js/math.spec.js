import { sum } from './math'

describe('sum', () => {
  it('should add two numbers', () => {
    const result = sum(2, 7);

    expect(result).toBe(9);
  });
});
