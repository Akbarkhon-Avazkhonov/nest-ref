import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ReferralService } from './referral.service';
import { CreateReferralDto } from './dto/create-referral.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guad';

@ApiTags('Referral')
@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('referral')
export class ReferralController {
  constructor(private readonly referralService: ReferralService) {}

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        user_id: { type: 'number' },
        product_id: { type: 'number' },
        category_id: { type: 'number' },
        title: { type: 'string' },
      },
    },
  })
  @Post()
  create(@Body() createReferralDto: CreateReferralDto) {
    return this.referralService.create(createReferralDto);
  }

  @Get(':user_id')
  findAll(@Param('user_id') user_id: string) {
    return this.referralService.findAll(+user_id);
  }

  @Get('id/:id')
  findOne(@Param('id') id: number) {
    return this.referralService.findOne(+id);
  }
}
