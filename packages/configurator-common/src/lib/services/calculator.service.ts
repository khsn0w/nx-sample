import {Injectable} from "@nestjs/common";

@Injectable()
export class CalculatorService{

  plus(a: number, b: number): number{
    return a + b ;
  }

  minus (a: number, b: number): number{
    return a - b;
  }

  minusAsPositive (a: number, b: number): number{
    return Math.max(a - b , 0);
  }

  multiply(a: number, b: number): number{
    return a * b
  }
  
}
