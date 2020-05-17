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
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    empresa_id : number;

    @Column()
    empresa_padrao_id : number;

    @Column()
    contato_id : number;

    @Column()
    categoria_id  : number;
    
    @Column()
    nome :string;

    @Column()
    grupo_menu_id:number;

    @Column()
    situacao :string;

    @Column()
    logon:string;

    @Column()
    senha :string;

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