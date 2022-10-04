import { PrismaClient } from '@prisma/client';


interface UserDataProps {
    name: string;
    email: string;
    description: string;
    professional: string;
}

export class UserRepository {

    private prisma = new PrismaClient();
    
    /**
     * Busca todos os usuários na base de dados.
     * @returns users
     */
    async findUser() {
        const prisma = new PrismaClient();
        const users = await prisma.user.findMany({
            select: {
                id: true, 
                email: true, 
                name: true, 
                description: true, 
                professional: true,
            }
        });
        return users;
    }

    /**
     * Cria um usuário na base de dados.
     * @param data UserDataProps
     * @returns 
     */
    async createUser(data: UserDataProps) {
        try {
            const prisma = new PrismaClient();

            const user = prisma.user.create({
                data: {
                    email: data.email,
                    description: data.description,
                    name: data.name,
                    professional: data.professional,
                },
            });

            return user;

        } catch (err) {
            console.log("Error: " + err);
            return err;
        }
    }

    /**
     * Busca apenas um usuário específico em acordo com o ID fornecido na rota.
     * @param userid any
     * @returns 
     */
    async findOnuUser(userid: any) {
        try {
            const prisma = new PrismaClient();

            const user = await prisma.user.findMany({
                select: {
                    id: true, email: true, name: true, description: true, professional: true,
                },
                where: {
                    id: userid,
                }
            });

            return user;
            
        } catch (err) {
            console.log("Error: " + err);
            return err;
        }

    }
}