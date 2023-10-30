//prisma.services.ts
import {PrismaClient } from '@prisma/client';
import { INestApplication,Injectable } from '@nestjs/common';
@Injectable()
export class PrismaService extends PrismaClient{
 location: any;
 async  enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit' as never ,async ()=>{

        await app.close();
    });
 }
     
}
