import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Conta } from 'src/Model/Contas';
import { ContaService } from 'src/services/conta/conta.service';
import { FindOneOptions } from 'typeorm';

@Controller('conta')
export class ContaController {
    constructor(private contaService: ContaService) { }

    @Post()
    async create(@Body() conta: Conta) {
        return await this.contaService.create(conta);
    }

    @Get()
    async get() {
        return await this.contaService.findAll()
    }

    @Get(':id')
    async getId(@Param('id') id: number) {
        const options: FindOneOptions<Conta> = {
            where: {id}
        }

        return await this.contaService.findOne(id)
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() conta: Conta) {
        return await this.contaService.update(id, conta);
    }

    @Delete(':id')
    async delete(@Param('id') id: number){
        return await this.contaService.delete(id)
    }
}
