import { Controller } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuariosService } from './usuarios.service';
import { Get, Post, Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('usuarios')
export class UsuariosController {
    constructor(private UsuariosService: UsuariosService){}
    
    @Get()
    index(): Promise<Usuario[]> {
      return this.UsuariosService.findAll();
    }    

    @Post('create')
    async create(@Body() usuariosDados: Usuario): Promise<any> {
      return this.UsuariosService.create(usuariosDados);
    } 

    @Put(':id/update')
    async update(@Param('id') id, @Body() usuariosDados: Usuario): Promise<any> {
        usuariosDados.id = Number(id);
        console.log('Update #' + usuariosDados.id)
        return this.UsuariosService.update(usuariosDados);
    } 

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.UsuariosService.delete(id);
    }  
}
