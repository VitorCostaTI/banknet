import { Module } from '@nestjs/common';
import { ContaModule } from './Modules/Conta/conta.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig),

    ContaModule
  ],
})
export class AppModule { }
