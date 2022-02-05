import {Body, Controller, Get, Post} from '@nestjs/common';
import {CalculationPayload} from "@nx-tutorial/configurator-common";
import {CalculatorService} from "../../../configurator-common/src/lib/services/calculator.service";

@Controller()
export class AppController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get()
  status() {
    return {}
  }
  @Post('plus')
  plus(@Body() payload: CalculationPayload) {
    const {firstOperand, secondOperand} = payload;
    return this.calculatorService.plus(firstOperand, secondOperand);
  }
}
