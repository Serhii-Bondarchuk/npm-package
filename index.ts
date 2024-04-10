export const polindrom = (str: string): boolean => {
  return str === str.split('').reverse().join()
}