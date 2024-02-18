import { isLeap } from "../main/leapyears"

describe('Leap year', () => {
  it ('should not be leap year for 2023' , () => {
    expect(isLeap(2023)).toBe(false)
  })

  it ('should be leap year for 2024' , () => {
    expect(isLeap(2024)).toBe(true)
  })

  it ('should not be leap year for 1800' , () => {
    expect(isLeap(1800)).toBe(false)
  })

  it ('should be leap year for 2000' , () => {
    expect(isLeap(2000)).toBe(true)
  })
})