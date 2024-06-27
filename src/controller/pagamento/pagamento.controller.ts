import { BadRequestException, Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { Pagamentos } from 'src/Model/Pagamentos';
import { PagamentosService } from 'src/services/pagamentos/pagamentos.service';

@Controller('pagamento')
export class PagamentoController {
    constructor(private pagamentoService: PagamentosService) { }

    @Post()
    @HttpCode(201)
    async create(@Body() pagamento: Pagamentos) {
        return await this.pagamentoService.create(pagamento);
    }

    @Get(':id')
    @HttpCode(200)
    async get(
        @Param() id: number,
        @Query('startDate') startDate: string,
        @Query('endDate') endDate: string,
    ) {
        try {
            if (!startDate || !endDate) {
                throw new BadRequestException('startDate e endDate são obrigatórios');
            }

            const pagamentos = await this.pagamentoService.findAll(
                id,
                new Date(startDate),
                new Date(endDate),
            );
            return pagamentos;
        } catch (error) {
            throw new BadRequestException('Não foi possível buscar pagamentos');
        }
    }
}
