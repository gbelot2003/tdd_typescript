import { Model, Optional } from 'sequelize';
import { Auth } from './Auth.interface';

interface UsersInstance  extends Auth {
    id: string;
    name: string;
    state: boolean;
};

/*
We have to declare the AuthorCreationAttributes to
tell Sequelize and TypeScript that the property id,
in this case, is optional to be passed at creation time
*/
interface UsersCreationAttributes
    extends Optional<UsersInstance, 'id'> { }

export interface UsersInterface
    extends Model<UsersInstance, UsersCreationAttributes>,
    UsersInstance {
    createdAt?: Date;
    updatedAt?: Date;
}