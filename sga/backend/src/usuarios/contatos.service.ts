import { Injectable } from '@nestjs/common';
import { Repository} from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { Contato} from './contato.entity';

@Injectable()
export class ContatosService {      
        constructor(
            @InjectRepository(Contato)
            private ContatoRepository: Repository<Contato>,           
        ) { 
            
        }
        async  findAll(): Promise<Contato[]> {
            return await this.ContatoRepository.find();
        }

        async  create(contato: Contato): Promise<Contato> {
            return await this.ContatoRepository.save(contato);
        } 

        async update(contato: Contato): Promise<UpdateResult> {
            return await this.ContatoRepository.update(contato.id, contato);
        } 
           
        async delete(id): Promise<DeleteResult> {
            return await this.ContatoRepository.delete(id);
        }
    }

    


  
   