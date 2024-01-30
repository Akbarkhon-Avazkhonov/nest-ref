import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Headers,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthGuard } from './auth.guad';
import { CreateUserDto } from './dto/auth-product.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        fullname: { type: 'string' },
        email: { type: 'string' },
        phone_number: { type: 'string' },
        password: { type: 'string' },
        gender: { type: 'string' },
        age: { type: 'number' },
        city: { type: 'string' },
      },
    },
  })
  @ApiOperation({
    description: 'Email & Password login endpoint for authentication',
  })
  @ApiOkResponse({
    description: 'Return JWT token',
  })
  @ApiUnauthorizedResponse({
    description: 'Cannot authorize with given Email and Password',
  })
  @Post('register')
  async registerUser(
    @Body()
    body: CreateUserDto,
  ) {
    return this.authService.createUser(body);
  }

  @ApiOperation({
    description: 'JWT token validation endpoint',
  })
  @ApiUnauthorizedResponse({
    description: 'Cannot authorize with given Email and Password',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string' },
        password: { type: 'string' },
      },
    },
  })
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('profile')
  async getProfile(@Headers() headers: any, @Request() req) {
    return this.authService.getProfile(req.email.email);
  }
}
