import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Board {
    @PrimaryGeneratedColumn({type:'int'})
    public readonly idB: number;
    @Column({type: "int"})
    public idU: number;
    @Column({type: "varchar"})
    public title: number;
}