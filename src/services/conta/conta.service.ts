import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Conta } from 'src/Model/Contas';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ContaService {
    constructor(
        @InjectRepository(Conta)
        private contaRepository: Repository<Conta>
    ) { }

    async findAll(): Promise<Conta[]> {
        return await this.contaRepository.find();
    }

    async findOne(options: FindOneOptions<Conta>): Promise<Conta> {
        return await this.contaRepository.findOne(options);
    }

    async create(conta: Conta) {
        return await this.contaRepository.save(conta)
    }

    async update(id: number, conta: Conta): Promise<Conta> {
        if (!conta) {
            throw new NotFoundException('Registro de conta não identificado');
        }

        const options: FindOneOptions<Conta> = {
            where: { id }
        }

        await this.contaRepository.update(id, conta)

        return await this.contaRepository.findOne(options)
    }

    async delete(conta: Conta, id: number): Promise<{ msg: String }> {
        if (!conta) {
            throw new NotFoundException('Registro não encontrado')
        }

        const options: FindOneOptions<Conta> = {
            where: { id }
        }

        await this.contaRepository.delete(id)

        return { msg: 'Conta deletada com sucesso' };
    }
}
