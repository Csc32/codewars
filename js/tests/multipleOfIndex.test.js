import { describe, it, expect, assert } from "vitest"
import multipleOfIndex from "../multipleOfIndex.js"
describe('multipleOfIndex', () => {
  it('should be an function', async () => {
    expect(typeof multipleOfIndex).toBe("function");
  })

  it('should return an array', async () => {
    assert.isArray(multipleOfIndex())
  })
})
