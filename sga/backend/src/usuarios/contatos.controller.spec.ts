import { Test, TestingModule } from '@nestjs/testing';
import { ContatosController } from './contatos.controller';

describe('Usuarios Controller', () => {
  let controller: ContatosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContatosController],
    }).compile();

    controller = module.get<ContatosController>(ContatosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
