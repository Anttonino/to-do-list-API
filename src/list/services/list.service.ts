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
    
    /**
     * @desc find all to-do in repository
     * @example
     * list | The program will show all to_do in database
     */
    async findAll (): Promise <List []> {
        return await this.listRepository.find ()
    }

    /**
     * @desc find to-do by id
     * @param id 
     * @example
     * find list/2 | The program will search the id to_do 2 in its database
     */
    async findById (id: number): Promise <List> {
        let searchList = await this.listRepository.findOne ({
            where: {id}
        });
        if (!searchList)
            throw new HttpException ('To do not found!', HttpStatus.NOT_FOUND)
        return searchList;
    }

    /**
     * @desc create a new to-do
     * @param List 
     * @example
     * {"text": "wake-up", "done": true}
     * {"text": "brush my teeths", "done": false}
     */
    async create (list: List): Promise <List> {
        return await this.listRepository.save (list)
    }

    /**
     * @desc update a new to-do
     * @param List 
     * @example
     * {"id": 1,"text": "brush my teeths", "done": true}
     */
    async update (list: List): Promise <List> {
        let searchList: List = await this.findById (list.id)

        if (!searchList || !list.id)
            throw new HttpException ('To do not found!', HttpStatus.NOT_FOUND)
        return await this.listRepository.save (list)
    }

    /**
     * @desc delete a to-do in database
     * @param id 
     * @example
     * list/2 | The program will search the id to_do 2 and delete him
     */
    async delete (id: number): Promise <DeleteResult> {
        let searchList = await this.findById (id);

        if (!searchList)
            throw new HttpException ('To do not found!', HttpStatus.NOT_FOUND)
        return await this.listRepository.delete (id);
    }
}