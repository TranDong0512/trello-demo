import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class List {
    @PrimaryGeneratedColumn({type:'int'})
    public readonly idL: number;
    @Column({type: "varchar"})
    public title: string;
    @Column({type: "int"})
    public board_id: number;

}