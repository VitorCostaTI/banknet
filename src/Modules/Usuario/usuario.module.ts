import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/Model/Usuario';
import { UsuarioController } from 'src/controller/usuario/usuario.controller';
import { UsuarioService } from 'src/services/usuario/usuario.service';

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UsuarioService],
    controllers: [UsuarioController]
})
export class UsuarioModule {}
