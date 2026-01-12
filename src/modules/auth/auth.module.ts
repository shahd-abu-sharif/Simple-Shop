import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports : [UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'secretKey', // TODO use env in auth module
      // signOptions: { expiresIn: '60s' },
    }),
  ]
})
export class AuthModule {}
