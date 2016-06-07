import { User } from '../user/User';

export class Balance {
    users: User[];
    total: number;
    toPay: number;
}