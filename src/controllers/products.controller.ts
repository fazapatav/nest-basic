import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  //si esté endpoint va primero que el anterior ocurriría un error, primero deben ir los que tengan parametro dinamico
  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'producto creado',
      payload,
    };
  }
}
