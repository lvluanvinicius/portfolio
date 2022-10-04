import { Prisma, PrismaClient } from '@prisma/client';


interface SkillProps {
    id?: string;
    name: string;
    path_image: string;
    userId: string;
    description: string,
}

export class SkillRepository {

    private prisma = new PrismaClient();

    async findSkills(uid: string) {
        try {
            const skills = await this.prisma.skills.findMany({
                select: {
                    id: true,
                    name: true,
                    path_image: true,
                    userId: true,
                    description: true,
                },
                where: {
                    userId: uid,
                },
            });

            return skills;

        } catch (err) {
            return err;
        }
    }

    async createSkill(skill: SkillProps) {
        try {
            const skl = await this.prisma.skills.create({
                data: {
                    path_image: skill.path_image,
                    name: skill.name,
                    description: skill.description,
                    userId: skill.userId,
                },
            });

            console.log(skl);
            console.log(skl);            

            return skl;

        } catch (err) {
            return err;
        }
    }
}