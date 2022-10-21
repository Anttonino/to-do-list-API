import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { List } from './list/entities/list.entity';
import { ListModule } from './list/list.module';

@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'list_db',
      entities: [List],
      synchronize: true
    }),
    ListModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}

