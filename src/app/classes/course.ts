import {User} from './user';
import { Lecturer } from './lecturer';

export class Course {
    id: string;
    location: string;
    time: string;
    type: string;
    students: User[];
    lecturer: Lecturer;
}
