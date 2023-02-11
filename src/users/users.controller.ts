import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Post('/signup')
    createUser(@Body() body:CreateUserDto ){
        this.usersService.create(body.email, body.password);
    }


     @Patch('/:id')
     updateUser(@Param('id') id:string, @Body() body: UpdateUserDto){
        return this.usersService.update(+id, body);
     }
}
