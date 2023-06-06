export class Contact {
    _id?: string;
    name: string;
    subject: string;
    message: String;

    constructor(name: string, subject: string, message: string){
        this.name=name;
        this.subject=subject;
        this.message=message;
        

    }
}