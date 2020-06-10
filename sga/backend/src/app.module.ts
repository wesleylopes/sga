
import { TicketsController } from './tickets/tickets.controller';
import { TicketsModule } from './tickets/tickets.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContatosModule } from './contatos/contatos.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutosModule } from './produtos/produtos.module'; 
import { EmpresasModule } from './empresas/empresas.module'; 

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
        TicketsModule, 
        TicketsModule, ClientesModule,ContatosModule,ProdutosModule,EmpresasModule, 
  TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "sga",    
    logging: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
 }),],
  controllers: [
        TicketsController, 
        TicketsController, 
        TicketsController, AppController],
  providers: [AppService],
})
export class AppModule {}
