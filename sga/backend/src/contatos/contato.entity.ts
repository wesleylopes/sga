import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  VersionColumn 
} from 'typeorm';

@Entity()
export class Contato {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    empresa_id : number;

    @Column()
    empresa_padrao_id : number;

    @Column()
    usuario_id : number;

    @Column()
    cliente_id : number;

    @Column()
    grupo_cliente_id : number;

    @Column()
    usuario_logon_id : number;

    @Column()
    categoria_id  : number;
    
    @Column()
    nome :string;        

    @Column()
    telefone:string;

    @Column()
    email:string;

    @Column()
    situacao :string;
   
    @Column()
    url_foto:string;    

    @Column()
    observacao :string;

    @CreateDateColumn()      
    data_cadastro ; 

    @UpdateDateColumn() 
    data_alteracao;

    @DeleteDateColumn() 
    data_delete; 

    @VersionColumn()
    versao;
   
}