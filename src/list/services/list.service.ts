import { HttpException, HttpStatus } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";

import { List } from "../entities/list.entity";

@Injectable ()
export class listService {
    constructor (
        @InjectRepository (List)
        private listRepository: Repository <List>
    ) { }

    async findAll (): Promise <List []> {
        return await this.listRepository.find ()
    }

    async findById (id: number): Promise <List> {
        let searchList = await this.listRepository.findOne ({
            where: {id}
        });
        if (!searchList)
            throw new HttpException ('To do not found!', HttpStatus.NOT_FOUND)
        return searchList;
    }

    async create (list: List): Promise <List> {
        return await this.listRepository.save (list)
    }

    async update (list: List): Promise <List> {
        let searchList: List = await this.findById (list.id)

        if (!searchList || !list.id)
            throw new HttpException ('To do not found!', HttpStatus.NOT_FOUND)
        return await this.listRepository.save (list)
    }

    async delete (id: number): Promise <DeleteResult> {
        let searchList = await this.findById (id);

        if (!searchList)
            throw new HttpException ('To do not found!', HttpStatus.NOT_FOUND)
        return await this.listRepository.delete (id);
    }
}