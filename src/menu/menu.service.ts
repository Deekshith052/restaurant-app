// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class MenuService {}

// src/menu/menu.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu, MenuDocument } from './menu.schema';
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
export class MenuService {
  constructor(@InjectModel(Menu.name) private menuModel: Model<MenuDocument>) {}

  async create(createMenuDto: CreateMenuDto): Promise<Menu> {
    const newMenu = new this.menuModel(createMenuDto);
    return await newMenu.save();
  }

  async findAll(): Promise<Menu[]> {
    return this.menuModel.find().exec();
  }

  async findOne(id: string): Promise<Menu> {
    return this.menuModel.findById(id).exec();
  }

  async update(id: string, updateMenuDto: CreateMenuDto): Promise<Menu> {
    return this.menuModel.findByIdAndUpdate(id, updateMenuDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Menu> {
    return this.menuModel.findByIdAndDelete(id).exec();
  }
}
