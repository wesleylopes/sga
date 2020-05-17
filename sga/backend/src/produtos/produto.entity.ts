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
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    empresa_id : number;

    @Column()
    categoria_id  : number; //Sistema, Modulo, Submodulo, Projeto, Pasta, Arquivo 
    
    @Column()
    nome :string;

    @Column()
    nome_abreviado :string;

    @Column()
    nivel :string;

    @Column()
    nivel_superior :string;

    @Column()
    unidade :string;

    @Column()
    valor : number;

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