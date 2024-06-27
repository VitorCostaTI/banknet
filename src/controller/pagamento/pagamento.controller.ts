import { BadRequestException, Body, Controller, Delete, Get, HttpCode, InternalServerErrorException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Pagamentos } from 'src/Model/Pagamentos';
import { PagamentosService } from 'src/services/pagamentos/pagamentos.service';

@Controller('pagamento')
export class PagamentoController {
    constructor(
        private pagamentoService: PagamentosService
    ) {}

    @Post()
    @HttpCode(201)
    async create(@Body() pagamento: Pagamentos){
        try {
           return await this.pagamentoService.create(pagamento)
        } catch (error) {
            throw new InternalServerErrorException('Não foi possivel cadastrar pagamento')
        }
    }

    @Get()
    @HttpCode(200)
    async get(){
        try {
            return await this.pagamentoService.findAll()
        } catch (error) {
            throw new BadRequestException('Não foi possivel buscar pagamentos')
        }
    }

    @Get(':id')
    @HttpCode(200)
    async getId(@Param('id', ParseIntPipe) id: number){
        try {
            return await this.pagamentoService.findOne(id)
        } catch (error) {
            throw new BadRequestException('Não foi possivel buscar pagamento')
        }
    }

    @Put(':id')
    @HttpCode(200)
    async update(@Param('id', ParseIntPipe) id: number, @Body() pagamento: Pagamentos){
        try {
            return await this.pagamentoService.update(id, pagamento);
        } catch (error) {
            throw new BadRequestException('Não foi possivel buscar pagamento')
        }
    }

    @Delete(':id')
    @HttpCode(201)
    async delete(@Param('id', ParseIntPipe) id: number){
        try {
            return await this.pagamentoService.delete(id)
        } catch (error) {
            throw new InternalServerErrorException('Não foi possivel buscar pagamento')
        }
    }
}
