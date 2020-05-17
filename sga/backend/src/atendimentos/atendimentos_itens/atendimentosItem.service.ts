import { Injectable } from '@nestjs/common';
import { Repository} from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { AtendimentoItem} from './atendimentoItem.entity';

@Injectable()
export class AtendimentosItemService {      
        constructor(
            @InjectRepository(AtendimentoItem)
            private atendimentoItemRepository: Repository<AtendimentoItem>,           
        ) { 
            
        }
        async  findAll(): Promise<AtendimentoItem[]> {
            return await this.atendimentoItemRepository.find();
        }

        async  create(atendimentoItem: AtendimentoItem): Promise<AtendimentoItem> {
            return await this.atendimentoItemRepository.save(atendimentoItem);
        } 

        async update(atendimentoItem: AtendimentoItem): Promise<UpdateResult> {
            return await this.atendimentoItemRepository.update(atendimentoItem.id, atendimentoItem);
        } 
           
        async delete(id): Promise<DeleteResult> {
            return await this.atendimentoItemRepository.delete(id);
        }
    }

    


  
   