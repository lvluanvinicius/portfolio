import { Response, Request, response } from 'express';
import { UserRepository } from '../repository/UserRepository';

class UserController {

    /**
     * Retorna todos os usuários cadastrados.
     * @param request 
     * @param response 
     */
    async users(request: Request, response: Response) {
        const user = new UserRepository();

        await user.findUser().then(data => {
            return response.status(200).json(data);
        }).catch(err => {
            return response.status(400).json(err);
        });
    }

    /**
     * Cria um novo usuário.
     * @param request 
     * @param response 
     */
    async createUser(request: Request, response: Response) {
        const data = request.body;
        const userRepository = new UserRepository();

        await userRepository.createUser(data).then(user => {
            return response.status(200).json(user);
        }).catch(err => {
            if (err.code == "P2002") return response.status(200).json({ message: "E-mail informado já existe!" });
            return response.status(400).json(err);
        });
    }

    async findOneUser(request: Request, response: Response) {
        const data = request.body;
        const user = new UserRepository();

        await user.findOnuUser(data.userid).then(data => {
            return response.status(200).json(data);
        }).catch(err => {
            return response.status(400).json(err);
        });
    }
}

export default UserController;