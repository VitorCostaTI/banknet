import { Module } from '@nestjs/common';
import { ContaModule } from './Modules/Conta/conta.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './database.config';
import { PagamentoModule } from './Modules/Pagamento/Pagamento.module';
import { UsuarioModule } from './Modules/Usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig),

    ContaModule,
    PagamentoModule,
    UsuarioModule
  ],
})
export class AppModule { }
