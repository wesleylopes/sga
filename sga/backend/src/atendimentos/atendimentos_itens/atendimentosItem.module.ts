import { Module } from '@nestjs/common';
import { AtendimentosItemService } from './atendimentosItem.service';
import { AtendimentosItemController } from './atendimentosItem.controller';
import { TypeOrmModule} from '@nestjs/typeorm';
import { AtendimentoItem} from './atendimentoItem.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([AtendimentoItem]),
  ],
  providers: [AtendimentosItemService],
  controllers: [AtendimentosItemController]
})
export class AtendimentosItemModule {}
