import { BadRequestException, Body, Controller, Delete, Get, HttpCode, InternalServerErrorException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Pagamentos } from 'src/Model/Pagamentos';
import { PagamentosService } from 'src/services/pagamentos/pagamentos.service';

@Controller('pagamento')
export class PagamentoController {
    constructor(
        private pagamentoService: PagamentosService
    ) { }

    @Post()
    @HttpCode(201)
    async create(@Body() pagamento: Pagamentos) {
        return await this.pagamentoService.create(pagamento)
    }

    @Get()
    @HttpCode(200)
    async get() {
        try {
            return await this.pagamentoService.findAll()
        } catch (error) {
            throw new BadRequestException('Não foi possivel buscar pagamentos')
        }
    }
}
