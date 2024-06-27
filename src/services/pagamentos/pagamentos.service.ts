import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

    async create(pagamento: Pagamentos) {
        return await this.pagamentoRepository.save(pagamento)
    }

    async update(id: number, pagamento: Pagamentos): Promise<Pagamentos> {
        const options: FindOneOptions<Pagamentos> = {
            where: { id },
        }
        await this.pagamentoRepository.update(id, pagamento);

        return await this.pagamentoRepository.findOne(options);
    }
    async delete(id: number): Promise<{ msg: String }> {
        await this.pagamentoRepository.delete(id);

        return { msg: 'Pagamento deletado com sucesso' }
    }
}
