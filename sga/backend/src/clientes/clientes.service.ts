import { Injectable } from '@nestjs/common';
import { Repository} from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { Cliente} from './cliente.entity';

@Injectable()
export class ClientesService {      
        constructor(
            @InjectRepository(Cliente)
            private ClienteRepository: Repository<Cliente>,           
        ) { 
            
        }
        async  findAll(): Promise<Cliente[]> {
            return await this.ClienteRepository.find();
        }

        async  create(cliente: Cliente): Promise<Cliente> {
            return await this.ClienteRepository.save(cliente);
        } 

        async update(cliente: Cliente): Promise<UpdateResult> {
            return await this.ClienteRepository.update(cliente.id, cliente);
        } 
           
        async delete(id): Promise<DeleteResult> {
            return await this.ClienteRepository.delete(id);
        }
    }

    


  
   