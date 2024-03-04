export class Client{    
    
    public id?: Number;
    public name?: string;
    public lastName?: string;
    public phone?:string;
    public email?:string;
    public archived?: boolean;
    public comments?: [];
    public created?: Date;
    public updated?: string;
    public deleted?: string;

    constructor(
        id?: Number,
        name?: string,
        lastName?: string,
        phone?:string,
        email?:string,
        archived?: boolean,
        comments?: [],
        created?: Date,
        updated?: string,
        deleted?: string,
    ){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.archived = archived;
        this.comments = comments;
        this.created = created;
        this.updated = updated;
        this.deleted = deleted;
    }
}