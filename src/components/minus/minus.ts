export const minus = (a: number = 10, b: number = 0): number => {
  console.log({ a, b })
  return Math.abs(a) - b
}