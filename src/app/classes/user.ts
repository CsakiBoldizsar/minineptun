export class User {
    constructor(username:string, password:string, role:string){
        this.username = username;
        this.password = password;
        this.role = role;
    }
    id: number;
    username: string;
    password: string;
    role: string;
    enabled: boolean
}
