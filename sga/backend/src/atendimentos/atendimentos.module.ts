import { Module } from '@nestjs/common';
import { AtendimentosService } from './atendimentos.service';
import { AtendimentosController } from './atendimentos.controller';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Atendimento} from './atendimento.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Atendimento]),
  ],
  providers: [AtendimentosService],
  controllers: [AtendimentosController]
})
export class AtendimentosModule {}
