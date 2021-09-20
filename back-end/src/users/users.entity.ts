import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 255 })
    email: string;
    
    @Column("varchar", { length: 20 })
    firstName: string;

    @Column("varchar", { length: 20 })
    lastName: string;

    @Column("varchar", { length: 20 })
    password: string;

    @Column("varchar", { length: 255 })
    role: string;
}