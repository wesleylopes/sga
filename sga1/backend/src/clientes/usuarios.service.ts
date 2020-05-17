import { Injectable } from '@nestjs/common';
import { Repository} from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { Usuario} from './usuario.entity';

@Injectable()
export class UsuariosService {      
        constructor(
            @InjectRepository(Usuario)
            private usuarioRepository: Repository<Usuario>,           
        ) { 
            
        }
        async  findAll(): Promise<Usuario[]> {
            return await this.usuarioRepository.find();
        }

        async  create(usuario: Usuario): Promise<Usuario> {
            return await this.usuarioRepository.save(usuario);
        } 

        async update(usuario: Usuario): Promise<UpdateResult> {
            return await this.usuarioRepository.update(usuario.id, usuario);
        } 
           
        async delete(id): Promise<DeleteResult> {
            return await this.usuarioRepository.delete(id);
        }
    }

    


  
   