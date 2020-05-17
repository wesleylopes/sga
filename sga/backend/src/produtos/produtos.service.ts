import { Injectable } from '@nestjs/common';
import { Repository} from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { Produto} from './produto.entity';

@Injectable()
export class ProdutosService {      
        constructor(
            @InjectRepository(Produto)
            private produtoRepository: Repository<Produto>,           
        ) { 
            
        }
        async  findAll(): Promise<Produto[]> {
            return await this.produtoRepository.find();
        }

        async  create(produto: Produto): Promise<Produto> {
            return await this.produtoRepository.save(produto);
        } 

        async update(produto: Produto): Promise<UpdateResult> {
            return await this.produtoRepository.update(produto.id, produto);
        } 
           
        async delete(id): Promise<DeleteResult> {
            return await this.produtoRepository.delete(id);
        }
    }

    


  
   