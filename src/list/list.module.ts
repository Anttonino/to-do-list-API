import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { List } from "./entities/list.entity";

@Module ({
    imports: [TypeOrmModule.forFeature ([List])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})

export class ListModule { }