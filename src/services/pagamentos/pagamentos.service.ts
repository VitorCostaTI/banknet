import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Conta } from 'src/Model/Contas';
import { Pagamentos } from 'src/Model/Pagamentos';
import { Between, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class PagamentosService {
    constructor(
        @InjectRepository(Conta)
        private contaRepository: Repository<Conta>,
        @InjectRepository(Pagamentos)
        private pagamentoRepository: Repository<Pagamentos>,
    ) { }

    async findAll(id_conta:number, startDate: Date, endDate: Date): Promise<{periodoCadastro: Pagamentos[], totalPagamento: number}> {
        const periodoCadastro = await this.pagamentoRepository.find({
            where: {
                id_conta,
                data: Between(startDate, endDate),
            },
        });

        const totalPagamento = periodoCadastro.reduce((acc, pagamento) => acc + pagamento.valor, 0);

        return{
            periodoCadastro,
            totalPagamento
        }
    }

    async findOne(id: number): Promise<Pagamentos> {
        const options: FindOneOptions<Pagamentos> = {
            where: { id }
        }
        return await this.pagamentoRepository.findOne(options);
    }

    async create(pagamento: Partial<Pagamentos>): Promise<Pagamentos> {

        const optionsConta: FindOneOptions<Conta> = {
            where: { id: pagamento.id_conta }
        };

        const conta = await this.contaRepository.findOne(optionsConta);
        if (!conta) {
            throw new NotFoundException(`Conta não encontrada`);
        }

        const novoPagamento = this.pagamentoRepository.create(pagamento);
        const pagamentoSalvo = await this.pagamentoRepository.save(novoPagamento);

        if (pagamento.valor > conta.saldo_inicial) {
            throw new NotFoundException(`Conta de ${conta.nome} não possui saldo suficiente`);
        }

        conta.saldo_inicial = conta.saldo_inicial - pagamento.valor;
        await this.contaRepository.save(conta);

        return pagamentoSalvo;
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
