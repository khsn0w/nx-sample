import { Module } from '@nestjs/common';
import {CalculatorService} from "./services/calculator.service";

@Module({
  controllers: [],
  providers: [CalculatorService],
  exports: [CalculatorService],
})
export class ConfiguratorCommonModule {}
