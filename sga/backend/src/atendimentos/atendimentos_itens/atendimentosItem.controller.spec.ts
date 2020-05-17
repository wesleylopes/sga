import { Test, TestingModule } from '@nestjs/testing';
import { AtendimentosItemController } from './atendimentosItem.controller';

describe('Atendimentos Item Controller', () => {
  let controller: AtendimentosItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtendimentosItemController],
    }).compile();

    controller = module.get<AtendimentosItemController>(AtendimentosItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
