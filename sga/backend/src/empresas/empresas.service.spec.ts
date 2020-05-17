import { Test, TestingModule } from '@nestjs/testing';
import { EmpresasService } from './empresas.service';
import { InjectRepository} from '@nestjs/typeorm';
import { Empresa} from './empresa.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class empresasService{
  
}

describe('EmpresasService', () => {
  let service: EmpresasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpresasService],
    }).compile();

    service = module.get<EmpresasService>(EmpresasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
