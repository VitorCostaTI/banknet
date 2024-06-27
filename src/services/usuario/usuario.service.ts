import { Injectable, InternalServerErrorException, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from 'src/Model/Usuario';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuarios)
        private readonly usuarioRepository: Repository<Usuarios>
    ) { }

    async findall() {
        try {
            return await this.usuarioRepository.find();
        } catch (error) {
            throw new InternalServerErrorException('Não foi possivel buscar usuarios')
        }
    }

    async findOne(id: number) {
        try {
            return await this.usuarioRepository.find({ where: { id } })
        } catch (error) {
            throw new InternalServerErrorException('Não foi possivel buscar usuarios')
        }
    }

    async create(usuario: Usuarios) {
        try {
            return await this.usuarioRepository.save(usuario)
        } catch (error) {
            throw new NotAcceptableException('Não foi possivel realizar cadastro do usuario')
        }
    }
    
    async update(id: number, usuario: Usuarios) {
        try {
            await this.usuarioRepository.update(id, usuario)
            return await this.usuarioRepository.find({where: {id}})
        } catch (error) {
            throw new NotAcceptableException('Não foi possivel atualizar cadastro do usuario')
        }
    }
    
    async delete(id: number){
        try {
            return await this.usuarioRepository.delete(id);
        } catch (error) {
            throw new NotAcceptableException('Não foi possivel deletar cadastro do usuario')
        }
    }
}

