import { sum } from '../sum'

describe('Sum function', () => {
  test('1 and 2 sum', () => {
    expect(sum(1, 2)).toBe(3)
  })
  test('2 and -3 sum', () => {
    expect(sum(2, -3)).toBe(-1)
  })
  test('7.25 and 5 sum', () => {
    expect(sum(7.25, 5)).toBe(12.25)
  })
})
