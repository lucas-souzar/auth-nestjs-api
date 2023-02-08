import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
  /**
   * Email will be used to login to the system.
   * @example email@mail.com
   */
  @IsEmail()
  email: string;

  /**
   * Password will be used to login to the system.
   */
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  /**
   * Name will be used to identify the user in the system.
   * @example Lucas Eduardo
   */
  @IsString()
  name: string;

  @IsNumber()
  age?: number;
}
