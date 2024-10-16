import { IsString, IsNumber} from 'class-validator';

export class CreateMenuDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;
}
