import { Lecturer } from './lecturer';
import { Student } from './student';

export class Course {
    id: number;
    location: string;
    time: string;
    type: string;
    students: string[];
    //students: Student[];
    lecturer: string;
    //lecturer: Lecturer;
    //subject: string;
}
