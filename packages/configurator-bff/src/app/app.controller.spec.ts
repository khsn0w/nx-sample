import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();
  });

  describe('getData', () => {
    it('should return empty object"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.status()).toEqual({
      });
    });
  });
});
