import { Injectable } from '@nestjs/common';
import { Repository} from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Ticket} from './ticket.entity'

@Injectable()
export class TicketsService {
    constructor(
        @InjectRepository(Ticket)
        private ticketRepository: Repository<Ticket>,           
    ) { 
    }
    async  findAll(): Promise<Ticket[]> {
        return await this.ticketRepository.find();
    }   
    
   async  findOne(ticket: Ticket): Promise<Ticket> {
        return await this.ticketRepository.findOne(ticket);
    } 


    async  create(ticket: Ticket): Promise<Ticket> {
        return await this.ticketRepository.save(ticket);
    } 

    async update(ticket: Ticket): Promise<UpdateResult> {
        return await this.ticketRepository.update(ticket.id, ticket);
    } 
       
    async delete(id): Promise<DeleteResult> {
        return await this.ticketRepository.delete(id);
    }

}
