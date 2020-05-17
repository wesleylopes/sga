import { Test, TestingModule } from '@nestjs/testing';
import { ContatosService } from './contatos.service';
import { InjectRepository} from '@nestjs/typeorm';
import { Contato} from './contato.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class contatosService{
  
}

describe('ContatosService', () => {
  let service: ContatosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContatosService],
    }).compile();

    service = module.get<ContatosService>(ContatosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
