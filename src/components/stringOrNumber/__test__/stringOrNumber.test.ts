import { describe, expect, it } from "vitest"
import { stringOrNumber } from "../stringOrNumber"

describe("stringOrNumber", () => {

  it('stringOrNumber() returns a string', () => {

    expect(stringOrNumber('some text')).toBe('string')
  })

  it('stringOrNumber() returns a number', () => {

    expect(stringOrNumber(100)).toBe('number')
  })
})