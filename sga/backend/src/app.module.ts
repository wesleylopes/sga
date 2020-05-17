import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContatosModule } from './usuarios/contatos.module';
import { ProdutosModule } from './produtos/produtos.module'; 
import { EmpresasModule } from './empresas/empresas.module'; 
import { AtendimentosModule } from './atendimentos/atendimentos.module';
import { AtendimentosItemModule } from './atendimentos/atendimentos_itens/atendimentosItem.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ContatosModule,ProdutosModule,EmpresasModule,AtendimentosModule,AtendimentosItemModule, 
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
