import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Conta } from 'src/Model/Contas';
import { Pagamentos } from 'src/Model/Pagamentos';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class PagamentosService {
    constructor(
        @InjectRepository(Pagamentos)
        private pagamentoRepository: Repository<Pagamentos>
    ) { }

    async findAll(): Promise<Pagamentos[]> {
        return await this.pagamentoRepository.find()
    }

    async findOne(id: number): Promise<Pagamentos> {
        const options: FindOneOptions<Pagamentos> = {
            where: { id }
        }
        return await this.pagamentoRepository.findOne(options);
    }

    async update(id: number, conta: Conta): Promise<Pagamentos> {
        const options: FindOneOptions<Pagamentos> = {
            where: { id },
        }
        await this.pagamentoRepository.update(id, conta);

        return await this.pagamentoRepository.findOne(options);
    }
    async delete(id: number): Promise<{ msg: String }> {
        await this.pagamentoRepository.delete(id);

        return { msg: 'Pagamento deletado com sucesso' }
    }
}
