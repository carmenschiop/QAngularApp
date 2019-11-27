import { Role } from './role';

export class User {
  id: number;
  name: string;
  email: string;
  second_email: string;
  customer: string;
  roles: Role[];
}
