import { Test, TestingModule } from '@nestjs/testing';
import { AtendimentosItemService } from './atendimentosItem.service';
import { InjectRepository} from '@nestjs/typeorm';
import { AtendimentoItem} from './atendimentoItem.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class atendimentosService{
  
}

describe('Atendimentos Service', () => {
  let service: AtendimentosItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtendimentosItemService],
    }).compile();

    service = module.get<AtendimentosItemService>(AtendimentosItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
