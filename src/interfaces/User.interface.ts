import { Auth } from "./Auth.interface";

export interface UserInterface extends Auth {
    id?: number;
    name: string
    state: boolean
}
