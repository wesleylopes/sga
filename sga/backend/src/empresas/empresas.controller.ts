import { Controller } from '@nestjs/common';
import { Empresa } from './empresa.entity';
import { EmpresasService } from './empresas.service';
import { Get, Post, Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('empresas')
export class EmpresasController {
    constructor(private EmpresasService: EmpresasService){}
    
    @Get()
    index(): Promise<Empresa[]> {
      return this.EmpresasService.findAll();
    }   

    @Get(':id')
    findOne(@Param() empresaDados: Empresa): Promise<any> {
      return this.EmpresasService.create(empresaDados);  
    }

    @Post()
    async create(@Body() empresaDados: Empresa): Promise<any> {
      return this.EmpresasService.create(empresaDados);
    } 

    @Put(':id')
    async update(@Param('id') id, @Body() empresaDados: Empresa): Promise<any> {
        empresaDados.id = Number(id);
        console.log('Update #' + empresaDados.id)
        return this.EmpresasService.update(empresaDados);
    } 

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.EmpresasService.delete(id);
    }  
}
