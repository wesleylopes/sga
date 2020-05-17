import { Module } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { EmpresasController } from './empresas.controller';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Empresa} from './empresa.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Empresa]),
  ],
  providers: [EmpresasService],
  controllers: [EmpresasController]
})
export class EmpresasModule {}
