import { Injectable } from '@nestjs/common';
import { CreateReferralDto } from './dto/create-referral.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReferralService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createReferralDto: CreateReferralDto) {
    return await this.prisma.link.create({
      data: {
        ...createReferralDto,
        url_link: `/user_id=${createReferralDto.user_id}&product_id=${createReferralDto.product_id}`,
      },
    });
  }

  async findAll(user_id: number) {
    return await this.prisma.link.findMany({
      where: { user_id: user_id },
    });
  }

  async findOne(id: number) {
    return await this.prisma.link.findUnique({
      where: { id: id },
    });
  }
}
