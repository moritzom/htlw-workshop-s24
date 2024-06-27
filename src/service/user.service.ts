import { User, UserModel } from "../model/user.model";

export async function createUser(user:User) {
    try{
        const userDocument = await UserModel.create(user);
        console.log("{User Service | Create User} - Successfully created user with id: " + userDocument.id);

        return userDocument;
    }catch(e){
        console.error(e);
        throw e;
    }


}