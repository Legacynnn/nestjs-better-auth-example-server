import { NextFunction } from 'express';
import { Request, Response } from 'express';

import { All, Controller, Next, Req, Res } from '@nestjs/common';

import { toNodeHandler } from 'better-auth/node';

import { auth } from '../auth';

@Controller('auth')
export class BetterAuthController {
 constructor() {}

 @All('*')
 async handleAuth(
   @Req() req: Request,
   @Res() response: Response,
   @Next() next: NextFunction,
 ) {
   try {
     return toNodeHandler(auth)(req, response);
   } catch (error) {
     next(error);
   }
 }
}