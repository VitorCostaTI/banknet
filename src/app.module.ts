import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContaController } from './controller/conta/conta.controller';
import { ContaService } from './services/conta/conta.service';

@Module({
  imports: [],
  controllers: [AppController, ContaController],
  providers: [AppService, ContaService],
})
export class AppModule {}
