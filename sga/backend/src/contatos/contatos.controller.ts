import { Controller } from '@nestjs/common';
import { Contato } from './contato.entity';
import { ContatosService } from './contatos.service';
import { Get, Post, Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('contatos')
export class ContatosController {
    constructor(private ContatosService: ContatosService){}
    
    @Get()
    index(): Promise<Contato[]> {
      return this.ContatosService.findAll();
    }    

    @Post('create')
    async create(@Body() usuariosDados: Contato): Promise<any> {
      return this.ContatosService.create(usuariosDados);
    } 

    @Put(':id/update')
    async update(@Param('id') id, @Body() contatosDados: Contato): Promise<any> {
        contatosDados.id = Number(id);
        console.log('Update #' + contatosDados.id)
        return this.ContatosService.update(contatosDados);
    } 

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.ContatosService.delete(id);
    }  
}
