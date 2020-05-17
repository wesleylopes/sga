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
export class Atendimento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    empresa_id : number;

    @Column()
    cliente_id : number;

    @Column()         
    usuario_id : number; 

    @Column()          
    origem_id : number; 

    @Column()
    categorias :string; 

    @Column()            
    tags :string; 

    @Column()      
    titulo :string;   

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
    horas_previsao : number; 

    @Column()    
    tempo_total : number;   

    @Column()
    relacionados :string;

    @VersionColumn()
    versao;

}