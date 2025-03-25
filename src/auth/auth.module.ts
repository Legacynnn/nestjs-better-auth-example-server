import { Module } from '@nestjs/common';
import { BetterAuthController } from './auth.controller';

@Module({
  controllers: [BetterAuthController],
})
export class BetterAuthModule {}