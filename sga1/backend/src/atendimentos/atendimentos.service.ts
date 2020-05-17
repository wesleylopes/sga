import { Injectable } from '@nestjs/common';
import { Repository} from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { Atendimento} from './atendimento.entity';

@Injectable()
export class AtendimentosService {      
        constructor(
            @InjectRepository(Atendimento)
            private atendimentoRepository: Repository<Atendimento>,           
        ) { 
            
        }
        async  findAll(): Promise<Atendimento[]> {
            return await this.atendimentoRepository.find();
        }

        async  create(atendimento: Atendimento): Promise<Atendimento> {
            return await this.atendimentoRepository.save(atendimento);
        } 

        async update(atendimento: Atendimento): Promise<UpdateResult> {
            return await this.atendimentoRepository.update(atendimento.id, atendimento);
        } 
           
        async delete(id): Promise<DeleteResult> {
            return await this.atendimentoRepository.delete(id);
        }
    }

    


  
   