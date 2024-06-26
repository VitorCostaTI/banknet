import { BadRequestException, Body, Controller, Delete, Get, HttpCode, InternalServerErrorException, Param, Post, Put } from '@nestjs/common';
import { Conta } from 'src/Model/Contas';
import { ContaService } from 'src/services/conta/conta.service';

@Controller('conta')
export class ContaController {
    constructor(private contaService: ContaService) { }

    @Post()
    @HttpCode(201)
    async create(@Body() conta: Conta) {
        try {
            return await this.contaService.create(conta);
        } catch (error) {
            throw new InternalServerErrorException('Não foi possivel cadastrar registro: ', error);
        }
    }
    
    @Get()
    @HttpCode(200)
    async get() {
        try {
            return await this.contaService.findAll();
        } catch (error) {
            throw new BadRequestException('Não foi possivel realizar registro: ', error);
        }
    }
    
    @Get(':id')
    @HttpCode(200)
    async getId(@Param('id') id: number) {      
        try {
            return await this.contaService.findOne(id);
        } catch (error) {
            throw new BadRequestException('Não foi possivel buscar registro: ', error);
        }
    }
    
    @Put(':id')
    @HttpCode(201)
    async update(@Param('id') id: number, @Body() conta: Conta) {
        try {
            return await this.contaService.update(id, conta);
        } catch (error) {
            throw new InternalServerErrorException('Não foi possivel atualizar registro: ', error);
        }
    }
    
    @Delete(':id')
    @HttpCode(201)
    async delete(@Param('id') id: number){
        try {
            return await this.contaService.delete(id);
        } catch (error) {
            throw new InternalServerErrorException('Não foi possivel deletar registro: ', error);
            
        }
    }
}

