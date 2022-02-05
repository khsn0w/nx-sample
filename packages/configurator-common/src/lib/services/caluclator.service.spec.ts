import {CalculatorService} from "./calculator.service";

describe('Calclutar service tests', () => {
  const calculatorService = new CalculatorService();
  const a = 5;
  const b = 12;
  test(`Should return ${a + b}`, () => {
    expect(calculatorService.plus(a,b)).toEqual(17)
  });
  test(`Should return ${a - b}`, () => {
    expect(calculatorService.minus(a,b)).toEqual(-7)
  });
  test(`Should return 0`, () => {
    expect(calculatorService.minusAsPositive(a,b)).toEqual(0)
  });
  test(`Should return ${a * b}`, () => {
    expect(calculatorService.multiply(a,b)).toEqual(60)
  });
})
