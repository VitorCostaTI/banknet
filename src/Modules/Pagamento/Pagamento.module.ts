import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pagamentos } from 'src/Model/Pagamentos';
import { PagamentoController } from 'src/controller/pagamento/pagamento.controller';
import { PagamentosService } from 'src/services/pagamentos/pagamentos.service';

@Module({
    imports: [TypeOrmModule.forFeature([Pagamentos])],
    providers: [PagamentosService],
    controllers: [PagamentoController]
})
export class PagamentoModule {}
