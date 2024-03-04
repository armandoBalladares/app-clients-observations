import { Client } from "./client.model";

export class Comment {

    public id?:number;
    public description?: string;
    public clientId?: number; // FK
    public client?: Client; // Navegation
    public created?: Date;
    public updated?: string;
    public deleted?: string;

    constructor(
        id?: number,
        description?: string,
        clientId?: number,
        client?: Client,
        created?: Date,
        updated?: string,
        deleted?: string,
    ){
        this.id = id,
        this.description = description,
        this.clientId = clientId,
        this.client = client,
        this.created = created,
        this.updated = updated,
        this.deleted = deleted
    }
    
}