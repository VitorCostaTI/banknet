import { IsNotEmpty, IsString, Min } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Conta {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    @IsString()
    nome: string;
    
    @Column()
    @IsString()
    tipo_conta: string;

    @Column()
    @Min(0)
    @IsNotEmpty()
    saldo_inicial: number;
}