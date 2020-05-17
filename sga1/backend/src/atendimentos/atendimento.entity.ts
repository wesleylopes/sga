import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn } from 'typeorm';

@Entity()
export class Atendimento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    emp_id : number;

    @Column()
    emp_padrao_id : number;

    @Column()
    pess_id : number;

    @Column()
    cate_id  : number;
    
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

    @CreateDateColumn()
    datate;

  
}