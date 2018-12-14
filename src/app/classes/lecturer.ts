import { Course } from "./course";
import { Subject } from "./subject";

export class Lecturer {
    name: string;
    id: number;
    courses: Course[];
    subjects: Subject[];
}
