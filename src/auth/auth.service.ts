import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  login() {}

  validateUser(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
}
