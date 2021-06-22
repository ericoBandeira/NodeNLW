import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean;

}

class CreateUserService{
    async execute({name, email, admin}: IUserRequest){
        const UsersRepositoriy = new UsersRepositories();

        if(!email){
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await UsersRepositoriy.findOne({
            email
        });

        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        const user = UsersRepositoriy.create({
            name,
            email,
            admin
        })

        await UsersRepositoriy.save(user);

        return user;
    }
}

export{ CreateUserService }