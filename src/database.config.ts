import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Conta } from './Model/Contas';
import { Pagamentos } from './Model/Pagamentos';

export const DatabaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'vitorcosta',
    database: 'postgres',
    entities: [Conta, Pagamentos],
    synchronize: true,
};
