import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { MessagesHelper, RegExHelper } from "src/helpers/regex-password";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { hashSync } from 'bcrypt';

@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    nome: number;

    @Column()
    @IsNotEmpty()
    sobrenome: string;

    @Column()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Column()
    @IsNotEmpty()
    @Matches(RegExHelper.password, { message: MessagesHelper.PASSWORD_VALID })
    password: string;

    @BeforeInsert()
    hasPassword() {
        this.password = hashSync(this.password, 10);
    }
}
