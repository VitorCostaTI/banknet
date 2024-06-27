import { IsNotEmpty, Min } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Conta } from "./Contas";

@Entity()
export class Pagamentos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    valor: number;

    @IsNotEmpty()
    @Min(0)
    @ManyToOne(() => Conta, conta => conta.pagamentos)
    id_conta: number;

    @Column()
    @IsNotEmpty()
    data: Date;

    @Column()
    @IsNotEmpty()
    descricao: string;
}