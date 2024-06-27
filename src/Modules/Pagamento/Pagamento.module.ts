import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conta } from 'src/Model/Contas';
import { Pagamentos } from 'src/Model/Pagamentos';
import { PagamentoController } from 'src/controller/pagamento/pagamento.controller';
import { PagamentosService } from 'src/services/pagamentos/pagamentos.service';

@Module({
    imports: [TypeOrmModule.forFeature([Pagamentos, Conta])],
    providers: [PagamentosService],
    controllers: [PagamentoController]
})
export class PagamentoModule {}
