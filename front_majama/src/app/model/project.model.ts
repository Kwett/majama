import { Member } from "./member.model";

export interface Project {
    ['@id']: number;
    ['@type']: string;
    name: string;
    visual: string;
    contact: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    description: string;
    members: Member[];
}