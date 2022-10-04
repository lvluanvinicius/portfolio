import { Request, Response } from 'express';
import { SkillRepository } from '../repository/SkillRepository';


export default class SkillController {

    async skills(request: Request, response: Response) {
        const body = request.body;

        const skillRepository = new SkillRepository();

        await skillRepository.findSkills(body.userid).then(data => {         
            return response.status(200).json(data);
        }).catch(err => {
            return response.status(400).json(err);
        });
    }

    async skillCreate(request: Request, response: Response) {
        const body = request.body;
        const skillRepository = new SkillRepository();

        await skillRepository.createSkill(body).then(data => {         
            return response.status(200).json(data);
        }).catch(err => {
            return response.status(400).json(err);
        });
    }
}