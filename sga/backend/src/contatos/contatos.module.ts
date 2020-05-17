import { Module } from '@nestjs/common';
import { ContatosService } from './contatos.service';
import { ContatosController } from './contatos.controller';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Contato} from './contato.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Contato]),
  ],
  providers: [ContatosService],
  controllers: [ContatosController]
})
export class ContatosModule {}
