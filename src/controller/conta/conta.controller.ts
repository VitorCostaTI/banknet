import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Conta } from 'src/Model/Contas';
import { ContaService } from 'src/services/conta/conta.service';
import { FindOneOptions } from 'typeorm';

@Controller('conta')
export class ContaController {
    constructor(private contaService: ContaService) { }

    @Post()
    @HttpCode(201)
    async create(@Body() conta: Conta) {
        return await this.contaService.create(conta);
    }
    
    @Get()
    @HttpCode(200)
    async get() {
        return await this.contaService.findAll()
    }
    
    @Get(':id')
    @HttpCode(200)
    async getId(@Param('id') id: number) {
        const options: FindOneOptions<Conta> = {
            where: {id}
        }
        
        return await this.contaService.findOne(id)
    }
    
    @Put(':id')
    @HttpCode(201)
    async update(@Param('id') id: number, @Body() conta: Conta) {
        return await this.contaService.update(id, conta);
    }
    
    @Delete(':id')
    @HttpCode(201)
    async delete(@Param('id') id: number){
        return await this.contaService.delete(id)
    }
}

