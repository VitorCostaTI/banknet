import { BadRequestException, Body, Controller, Delete, Get, HttpCode, InternalServerErrorException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Conta } from 'src/Model/Contas';
import { ContaService } from 'src/services/conta/conta.service';

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
        return await this.contaService.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    async getId(@Param('id', ParseIntPipe) id: number) {
        return await this.contaService.findOne(id);
    }
}

