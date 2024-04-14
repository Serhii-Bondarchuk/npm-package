export const palindrome = (str: string): boolean => {
  return str === str.split('').reverse().join('')
}