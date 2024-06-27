import { Injectable, InternalServerErrorException, NotAcceptableException } from '@nestjs/common';
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
        try {
            return await this.contaRepository.find({ relations: ['pagamentos'] });
        } catch (error) {
            throw new InternalServerErrorException('Não foi possivel buscar contas')
        }
    }

    async findOne(id: number): Promise<Conta> {
        try {
            const options: FindOneOptions<Conta> = {
                where: { id },
                relations: ['pagamentos'],
            };

            return await this.contaRepository.findOne(options);
        } catch (error) {
            throw new InternalServerErrorException('Não foi possivel buscar conta')
        }
    }

    async create(conta: Conta) {
        try {
            return await this.contaRepository.save(conta)
        } catch (error) {
            throw new NotAcceptableException('Não foi possivel cadastrar conta')
        }
    }

    async update(id: number, conta: Conta): Promise<Conta> {

        try {
            const options: FindOneOptions<Conta> = {
                where: { id }
            }

            await this.contaRepository.update(id, conta);

            return await this.contaRepository.findOne(options);
        } catch (error) {
            throw new NotAcceptableException('Não foi possivel buscar conta')
        }
    }

    async delete(id: number): Promise<{ msg: String }> {
        try {
            await this.contaRepository.delete(id)
            return { msg: 'Conta deletada com sucesso' };
        } catch (error) {
            throw new NotAcceptableException('Não foi possivel buscar conta')
        }
    }
}
