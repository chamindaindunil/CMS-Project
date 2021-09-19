import { Controller, Get, Post, Param, Body, Put, Delete, Patch, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { User } from './user.model';
import { identity } from 'rxjs';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // Create
    @Post()
    async create(@Body() user: User): Promise<Users[]> {
        return this.usersService.create(user);
    }

    // Read All
    @Get()
    findAll(): Promise<Users[]> {
        return this.usersService.findAll();
    }

    // Read One
    @Get("/:id")
    findOne(@Param() param): Promise<Users[]> {
        return this.usersService.findOne(param.id);
    }

    // Update
    @Post(":id/update")
    async update(@Param('id') id, @Body() user: User):Promise<any> {
        user.id = Number(id);
        return this.usersService.update(user);
    }

    // Delete
    @Post(":id/delete")
    async delete(@Param('id') id): Promise<any> {
        return this.usersService.delete(id);
    }

    // Query
    @Get("query/:email/:pass")
    async query(@Param('email') email, @Param('pass') pass): Promise<any> {
        return this.usersService.query(email, pass);
    }
}
