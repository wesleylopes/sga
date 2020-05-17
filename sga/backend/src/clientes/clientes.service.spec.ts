import { Test, TestingModule } from '@nestjs/testing';
import { ClientesService } from './clientes.service';
import { InjectRepository} from '@nestjs/typeorm';
import { Cliente} from './cliente.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class clientesService{}

describe('UsuariosService', () => {
  let service: ClientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientesService],
    }).compile();

    service = module.get<ClientesService>(ClientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
