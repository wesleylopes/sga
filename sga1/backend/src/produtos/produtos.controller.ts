import { Controller } from '@nestjs/common';
import { Produto } from './produto.entity';
import { ProdutosService } from './produtos.service';
import { Get, Post, Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
    constructor(private ProdutosService: ProdutosService){}
    
    @Get()
    index(): Promise<Produto[]> {
      return this.ProdutosService.findAll();
    }    

    @Post('create')
    async create(@Body() produtosDados: Produto): Promise<any> {
      return this.ProdutosService.create(produtosDados);
    } 

    @Put(':id/update')
    async update(@Param('id') id, @Body() produtosDados: Produto): Promise<any> {
      produtosDados.id = Number(id);
        console.log('Update #' + produtosDados.id)
        return this.ProdutosService.update(produtosDados);
    } 

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.ProdutosService.delete(id);
    }  
}
