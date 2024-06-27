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
        return await this.contaRepository.find({relations: ['pagamentos']});
    }

    async findOne(id: number): Promise<Conta> {
        const options: FindOneOptions<Conta> = {
          where: { id },
          relations: ['pagamentos'],
        };
    
        return await this.contaRepository.findOne(options);
      }

    async create(conta: Conta) {
        return await this.contaRepository.save(conta)
    }

    async update(id: number, conta: Conta): Promise<Conta> {

        const options: FindOneOptions<Conta> = {
            where: { id }
        }

        await this.contaRepository.update(id, conta)

        return await this.contaRepository.findOne(options)
    }

    async delete(id: number): Promise<{ msg: String }> {

        await this.contaRepository.delete(id)

        return { msg: 'Conta deletada com sucesso' };
    }
}
