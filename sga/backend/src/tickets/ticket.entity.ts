import{
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Ticket{
    @PrimaryGeneratedColumn()
      id:number;

    @Column({nullable: true})
      data_cadastro:string;

    @Column({nullable: true})
      data_alteracao:string;

    @Column({nullable: true})
      data_conclusao:string;

    @Column({nullable: true})
      data_previsao:string;

    @Column({nullable:true})
      data_reabertura:Date;

    @Column({nullable:true})
      usuario_id:number; //usuario Abertura Chamado
    
    @Column({nullable:true})
      usuario_analista_id:number; // Analista Atual

    @Column({nullable:true})
      cliente_id:number;  // Codigo empresa Cliente

    @Column({nullable:true})
      cliente_filial_id:number;

    @Column({nullable:true})
      assunto:string;

    @Column({nullable:true})
      descritivo:string;

    @Column({nullable:true})
      prioridade:string;

    @Column({nullable:true})
      status:string;
    
    @Column({nullable:true})
      porcentagem_concluido:number;

    @Column({nullable:true})
      suporte:string;

    @Column({nullable:true})
      desenvolvimento:string;

    @Column({nullable:true})
      supervisor:string;

    @Column({nullable:true})
      diretoria:string;

    @Column({nullable:true})
      justificativa_reabertura:string;
    

      

}

