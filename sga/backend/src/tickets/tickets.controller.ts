import { Controller } from '@nestjs/common';
import { Ticket} from './ticket.entity';
import { TicketsService} from './tickets.service';
import { Get, Post, Put, Delete, Body, Param} from '@nestjs/common';

@Controller('tickets')
export class TicketsController {
    constructor(private TicketsService:TicketsService){}
    
    @Get()
    index():Promise<Ticket[]>{
        return this.TicketsService.findAll();    
    }

    @Get(':id')
    async get(@Param('id') id):Promise<any>{
        return this.TicketsService.findOne(id);
    }

    @Post()
    async create(@Body() ticketDados: Ticket): Promise<any> {
        return this.TicketsService.create(ticketDados);
      } 

    @Put(':id')
      async update(@Param('id') id, @Body() ticketDados: Ticket): Promise<any> {
        ticketDados.id = Number(id);
          console.log('Update #' + ticketDados.id)
          return this.TicketsService.update(ticketDados);
      } 
  
      @Delete(':id')
      async delete(@Param('id') id): Promise<any> {
        return this.TicketsService.delete(id);
      }  





















}
