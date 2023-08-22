import { Controller, Post } from "@nestjs/common";
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){}

    @Post('register')
    register(){
        return 'I am registered'
    }

    @Post('login')
    login(){
        return 'I am logged in'
    }
}