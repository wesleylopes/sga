import { Controller } from '@nestjs/common';
import { AtendimentoItem } from './atendimentoItem.entity';
import { AtendimentosItemService } from './atendimentosItem.service';
import { Get, Post, Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('atendimentos-item')
export class AtendimentosItemController {
    constructor(private AtendimentosItemService: AtendimentosItemService){}
    
    @Get('')
    index(): Promise<AtendimentoItem[]> {
      return this.AtendimentosItemService.findAll();
    }   

    @Post('create')
    async create(@Body() atendimentosItemDados: AtendimentoItem): Promise<any> {
      return this.AtendimentosItemService.create(atendimentosItemDados);
    } 

    @Put(':id/update')
    async update(@Param('id') id, @Body() atendimentosItemDados: AtendimentoItem): Promise<any> {
      atendimentosItemDados.id = Number(id);
        console.log('Update #' + atendimentosItemDados.id)
        return this.AtendimentosItemService.update(atendimentosItemDados);
    } 

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.AtendimentosItemService.delete(id);
    }  
}
