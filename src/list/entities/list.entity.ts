import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name: 'do_tb'})
export class List {
    
    @PrimaryGeneratedColumn ()
    id: number;

    @IsNotEmpty ()
    @Column ({length: 255, nullable: false})
    text: string;
    
    @IsNotEmpty ()
    @Column ({nullable: false})
    done: boolean;
}
