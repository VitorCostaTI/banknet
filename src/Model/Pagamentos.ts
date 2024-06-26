import { IsNotEmpty, Min } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pagamentos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    valor: number;

    @Column()
    @IsNotEmpty()
    @Min(0)
    id_conta: number;

    @Column()
    @IsNotEmpty()
    data: Date;

    @Column()
    @IsNotEmpty()
    descricao: string;
}