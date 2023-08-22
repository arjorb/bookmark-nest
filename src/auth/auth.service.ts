import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService  {
    login(){
        return {msg:'I have logged in'}
    }

    register(){
        return {msg:'I have registered'};
    }
}