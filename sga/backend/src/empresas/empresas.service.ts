import { Injectable } from '@nestjs/common';
import { Repository} from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { Empresa} from './empresa.entity';

@Injectable()
export class EmpresasService {      
        constructor(
            @InjectRepository(Empresa)
            private empresaRepository: Repository<Empresa>,           
        ) { 
            
        }
        async  findAll(): Promise<Empresa[]> {
            return await this.empresaRepository.find();
        }   
        
       async  findOne(empresa: Empresa): Promise<Empresa> {
            return await this.empresaRepository.findOne(empresa);
        } 


        async  create(empresa: Empresa): Promise<Empresa> {
            return await this.empresaRepository.save(empresa);
        } 

        async update(empresa: Empresa): Promise<UpdateResult> {
            return await this.empresaRepository.update(empresa.id, empresa);
        } 
           
        async delete(id): Promise<DeleteResult> {
            return await this.empresaRepository.delete(id);
        }
    }

    


  
   