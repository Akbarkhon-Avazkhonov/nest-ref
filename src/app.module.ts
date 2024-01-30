import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { ReferralModule } from './referral/referral.module';

@Module({
  imports: [AuthModule, ProductsModule, CategoryModule, ReferralModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
