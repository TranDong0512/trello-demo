import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({type:'int'})
    public readonly idU: number;
    @Column({type: "varchar"})
    public U_name: string
    @Column({type: "varchar"})
    public U_password: string
    @Column({nullable: true, type: "varchar"})
    public U_email: string
    @Column({nullable: true, type: "text"})
    public U_avatar: string

}