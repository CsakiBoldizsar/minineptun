import {User} from './user';
import { Lecturer } from './lecturer';
import { Student } from './student';

export class Course {
    id: string;
    location: string;
    time: string;
    type: string;
    students: Student[];
    lecturer: Lecturer;
}
