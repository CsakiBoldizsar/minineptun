import {User} from './user';

export class Course {
    id: string;
    location: string;
    time: string;
    type: string;
    students: User[];
}
