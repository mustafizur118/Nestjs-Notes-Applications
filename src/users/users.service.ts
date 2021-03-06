import { Injectable } from '@nestjs/common';


export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'Mustafizur Rahman',
            username: 'thefizz',
            password: 'fizz123'
        },
        {
            id: 2,
            name: 'Mahfuzur',
            username: 'mahfuzur',
            password: 'mahfuzur123'
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
