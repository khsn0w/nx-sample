import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import {ConfiguratorCommonModule} from "@nx-tutorial/configurator-common";

@Module({
  imports: [ConfiguratorCommonModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
