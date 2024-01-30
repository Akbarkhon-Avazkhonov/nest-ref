import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
    return await this.prisma.product.create({ data: createProductDto });
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({ where: { id: id } });
  }

  async findByCategory(category_id: number) {
    return await this.prisma.product.findMany({
      where: { category_id: category_id },
    });
  }
  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.prisma.product.update({
      where: { id: id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.product.delete({ where: { id: id } });
  }
}
