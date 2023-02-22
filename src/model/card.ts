import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Card {
    @PrimaryGeneratedColumn({type:'int'})
    public readonly idC: number;
    @Column({type: "varchar"})
    public idL: string;
    @Column({type: "varchar"})
    public detail: string;
}