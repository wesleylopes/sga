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
export class Empresa {
    @PrimaryGeneratedColumn()
    id: number;   
    
    @Column()
    nome :string;

    @Column()
    razao_social :string;

    @Column()
    cnpj :string;

    @Column()
    inscricao_estadual :string;

    @Column()
    inscricao_municipal :string;

    @Column()
    endereco :string;

    @Column()
    bairro :string;

    @Column()
    cidade :string;

    @Column()
    cep :string;

    @Column()
    email :string;

    @Column()
    situacao :string;
    
    @Column()
    matriz : string; 
    
    @Column()
    observacao :string;

    @Column()
    url_logo:string;

    @CreateDateColumn()      
    data_cadastro ; 

    @UpdateDateColumn() 
    data_alteracao;

    @DeleteDateColumn() 
    data_delete; 

    @VersionColumn()
    versao;

}