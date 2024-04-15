export const stringOrNumber = (logMessage: string | number): string => {
  if (typeof logMessage === 'string') {
    return 'string'
  }
  return 'number'
}