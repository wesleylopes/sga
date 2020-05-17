import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    VersionColumn } 
from 'typeorm';

@Entity()
export class AtendimentoItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    atendimento_id : number;

    @Column()
    cliente_id : number;

    @Column()         
    usuario_id : number; 

    @Column()         
    usuarios_envolvidos : number; 

    @Column()          
    origem_id : number;    

    @Column()            
    tags :string;  

    @Column()      
    descricao:string; 

    @Column()     
    situacao:string; 

    @CreateDateColumn()      
    data_cadastro ; 

    @UpdateDateColumn() 
    data_alteracao;

    @DeleteDateColumn() 
    data_delete;

    @CreateDateColumn()   
    data_abertura; 

    @CreateDateColumn()    
    data_previsao;  

    @CreateDateColumn()  
    data_concluido;

    @Column()
    tempo : number; 

    @Column()
    relacionados :string;

    @VersionColumn()
    versao;

}