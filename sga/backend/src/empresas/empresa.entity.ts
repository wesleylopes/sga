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
    
    @Column({nullable: true})
    nome :string;

    @Column({nullable: true})
    razao_social :string;

    @Column({nullable: true})
    cnpj :string;

    @Column({nullable: true})
    inscricao_estadual :string;

    @Column({nullable: true})
    inscricao_municipal :string;

    @Column({nullable: true})
    endereco :string;

    @Column({nullable: true})
    bairro :string;

    @Column({nullable: true})
    cidade :string;

    @Column({nullable: true})
    cep :string;

    @Column({nullable: true})
    email :string;

    @Column({nullable: true})
    situacao :string;
    
    @Column({nullable: true})
    matriz : string; 
    
    @Column({nullable: true})
    observacao :string;

    @Column({nullable: true})
    url_logo:string;

    @CreateDateColumn({nullable: true})      
    data_cadastro ; 

    @UpdateDateColumn({nullable: true}) 
    data_alteracao;

    @DeleteDateColumn({nullable: true}) 
    data_delete; 

    @VersionColumn({nullable: true})
    versao;

}