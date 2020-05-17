import { Controller } from '@nestjs/common';
import { Cliente} from './cliente.entity';
import { ClientesService } from './clientes.service';
import { Get, Post, Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('clientes')
export class ClientesController {
    constructor(private ClientesService: ClientesService){}
    
    @Get()
    index(): Promise<Cliente[]> {
      return this.ClientesService.findAll();
    }    

    @Post('novo')
    async create(@Body() clientesDados: Cliente): Promise<any> {
      return this.ClientesService.create(clientesDados);
    } 

    @Put(':id/alterar')
    async update(@Param('id') id, @Body() clientesDados: Cliente): Promise<any> {
        clientesDados.id = Number(id);
        console.log('Update #' + clientesDados.id)
        return this.ClientesService.update(clientesDados);
    } 

    @Delete(':id/deletar')
    async delete(@Param('id') id): Promise<any> {
      return this.ClientesService.delete(id);
    }  
}
