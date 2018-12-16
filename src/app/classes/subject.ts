import { Course } from "./course";
import { Lecturer } from "./lecturer";

export class Subject {
    id: number;
    name: string;
    category: string;
    courses: Course[];
    lectureres: Lecturer[];
}
