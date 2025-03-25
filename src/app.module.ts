import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule, AuthGuard } from 'better-auth/nestjs';
import { auth } from "./auth";
import { BetterAuthController } from './auth/auth.controller';
import { BetterAuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule.forRoot(auth),
  ],
})
export class AppModule {}