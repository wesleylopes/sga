import { Controller } from '@nestjs/common';
import { Atendimento } from './atendimento.entity';
import { AtendimentosService } from './atendimentos.service';
import { Get, Post, Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('atendimentos')
export class AtendimentosController {
    constructor(private AtendimentosService: AtendimentosService){}
    
    @Get('')
    index(): Promise<Atendimento[]> {
      return this.AtendimentosService.findAll();
    }   

    @Post('create')
    async create(@Body() atendimentosDados: Atendimento): Promise<any> {
      return this.AtendimentosService.create(atendimentosDados);
    } 

    @Put(':id/update')
    async update(@Param('id') id, @Body() atendimentosDados: Atendimento): Promise<any> {
        atendimentosDados.id = Number(id);
        console.log('Update #' + atendimentosDados.id)
        return this.AtendimentosService.update(atendimentosDados);
    } 

    @Delete(':id/deletar')
    async delete(@Param('id') id): Promise<any> {
      return this.AtendimentosService.delete(id);
    }  
}
