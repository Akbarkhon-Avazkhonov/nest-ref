import { Module } from '@nestjs/common';
import { ReferralService } from './referral.service';
import { ReferralController } from './referral.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ReferralController],
  providers: [ReferralService, PrismaService],
})
export class ReferralModule {}
