import { Body, Delete, Param, ParseIntPipe,Controller, Get, HttpCode, HttpStatus, Post, Put } from "@nestjs/common"

import { List } from "../entities/List.entity";
import { listService } from "../services/list.service";

@Controller ("/list")
export class listController {
    constructor (private readonly listService: listService) { }

    @Get ()
    @HttpCode (HttpStatus.OK)
    findAll (): Promise <List []> {
        return this.listService.findAll ();
    }

    @Get ('/:id')
    @HttpCode (HttpStatus.OK)
    findById (@Param ('id', ParseIntPipe) id: number): Promise <List> {
        return this.listService.findById (id)
    }

    @Post ()
    @HttpCode (HttpStatus.CREATED)
    create(@Body () List: List): Promise <List> {
        return this.listService.create (List)
    }

    @Put()
    @HttpCode (HttpStatus.OK)
    update (@Body () List: List): Promise <List> {
        return this.listService.update (List);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete (@Param ('id', ParseIntPipe) id: number) {
        return this.listService.delete (id)
    }
}