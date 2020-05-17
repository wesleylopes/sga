import { Test, TestingModule } from '@nestjs/testing';
import { AtendimentosService } from './atendimentos.service';
import { InjectRepository} from '@nestjs/typeorm';
import { Atendimento} from './atendimento.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class atendimentosService{
  
}

describe('Atendimentos Service', () => {
  let service: AtendimentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtendimentosService],
    }).compile();

    service = module.get<AtendimentosService>(AtendimentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
