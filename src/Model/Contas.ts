import { IsNotEmpty, Min } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pagamentos } from "./Pagamentos";

@Entity()
export class Conta {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    nome: string;

    @Column()
    tipo_conta: string;

    @Column()
    @Min(0)
    @IsNotEmpty()
    saldo_inicial: number;

    @OneToMany(() => Pagamentos, pagamentos => pagamentos.id_conta)
    pagamentos: Pagamentos[];
}