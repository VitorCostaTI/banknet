import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auditoria{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    descricao: string;

    @Column()
    @IsNotEmpty()
    data: Date;
}