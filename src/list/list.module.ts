import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { List } from "./entities/list.entity";
import { listService } from "./services/list.service";
import { listController } from "./controller/list.controller";

@Module ({
    imports: [TypeOrmModule.forFeature ([List])],
    providers: [listService],
    controllers: [listController],
    exports: [TypeOrmModule]
})

export class ListModule { }