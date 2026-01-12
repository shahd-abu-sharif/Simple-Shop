// ? second thing is the Controller
import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import type { Request } from 'express';
import { AuthService } from './auth.service';
import type { LoginDTO, RegisterDTO, UserResponseDTO } from './dto/auth.dto';


//  we have 3 routes > register - login - revalidate 

/* //SECTION - 
//*
//* Endpoint vs route vs controller(clear distinction)
//*       Term            	        Meaning
//*   Route   	    >>      A pattern like / auth / register
//*   Method	      >>      GET / POST / PATCH / DELETE
//*   Endpoint	    >>      Method + route
//*   Controller	  >>      Code that handles the endpoint
//*
*/

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // POST /auth/register   ✅ (real endpoint)
  // /auth/register (just a path)
  @Post('register')
  register(@Body() registerDTO: RegisterDTO) : Promise<UserResponseDTO> {  // that is a function will handle 'auth/register' route
    return this.authService.register(registerDTO);
  }


  @Post('login')
  login(@Body() loginDTO: LoginDTO): Promise<UserResponseDTO> {  // that is a function will handle 'auth/login' route
    return this.authService.login(loginDTO);
  }


  @Get('validate')
  //  TODO add guard
  validate(@Req() request : Request) : UserResponseDTO {
    // //  we need to check the header
    // return request.user! // todo make guard
    return this.authService.validate(request.user!)

 
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
