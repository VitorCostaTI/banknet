import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conta } from 'src/Model/Contas';
import { ContaController } from 'src/controller/conta/conta.controller';
import { ContaService } from 'src/services/conta/conta.service';

@Module({
    imports: [TypeOrmModule.forFeature([Conta])],
    providers: [ContaService],
    controllers: [ContaController]
})
export class ContaModule {}
