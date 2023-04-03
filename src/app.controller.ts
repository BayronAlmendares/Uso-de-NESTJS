import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'EVERTHING IS POSIBLE!';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'I am new';
  }
  @Get('/ruta/')
  hello() {
    return 'con /SAS/';
  }

  @Get('products/:id')
  getProduct(@Param() params: any) {
    return `Producto con id : ${params.id}`;
  }

  @Get('books/:editorial')
  getEditorial(@Param('editorial') editorial: string) {
    return `El libro es de la editorial: ${editorial}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `producto con id: ${productId} y categoria: ${id}`;
  }

  @Get('parametros')
  getItem(@Query('limit') limit: number, @Query('offset') offset: number) {
    return `items, limit: ${limit} and offset: ${offset}`;
  }
}
