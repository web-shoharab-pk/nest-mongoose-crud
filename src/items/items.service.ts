import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './interface/items.interface';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  };

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findById(id);
  };

  async createItem(item: Item): Promise<Item> {
    return await this.itemModel.create(item);
  };

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndDelete(id);
  };

  async update(id: string, item: Item): Promise<Item> { 
    return await this.itemModel.findByIdAndUpdate(id, item, {
      new: true,
    }); 
  }
}
