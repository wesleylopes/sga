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
      usuario_id:number;
    
    @Column({nullable:true})
      usuario_analista_id:number;

    @Column({nullable:true})
      cliente_id:number;

    @Column({nullable:true})
      cliente_filial_id:number;

      

}

