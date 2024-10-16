// import { Controller } from '@nestjs/common';

// @Controller('menu')
// export class MenuController {}


// src/menu/menu.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './menu.schema';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() createMenuDto: CreateMenuDto): Promise<Menu> {
    return this.menuService.create(createMenuDto);
  }

  @Get()
  findAll(): Promise<Menu[]> {
    return this.menuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Menu> {
    return this.menuService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: CreateMenuDto): Promise<Menu> {
    return this.menuService.update(id, updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Menu> {
    return this.menuService.remove(id);
  }
}
