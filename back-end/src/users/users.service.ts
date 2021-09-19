import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { User } from "./user.model";
import { Users } from "./users.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) {}

    async create(user: User): Promise<any> {
        return await this.usersRepository.save(user);
    }

    async findAll(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    async findOne(id: number): Promise<any> {
        return this.usersRepository.findOne(id);
    }

    async update(user: User): Promise<UpdateResult> {
        return await this.usersRepository.update(user.id, user);
    }

    async delete(id: number): Promise<any> {
        return this.usersRepository.delete(id);
    }

    async query(email: string, pass: string): Promise<any> {
        return this.usersRepository.find({email: email, password: pass});
    }
}