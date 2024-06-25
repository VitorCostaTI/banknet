import { Module } from '@nestjs/common';
import { ContaModule } from './Modules/Conta/conta.module';

@Module({
  imports: [ContaModule],
})
export class AppModule {}
