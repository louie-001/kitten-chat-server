import { Schema } from '@nestjs/mongoose';

export class UserSchema {
  username: { type: string; index: true };
}
