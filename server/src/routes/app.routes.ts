import { Router } from 'express';
import SkillController from '../controllers/SkillController';

import UserController from '../controllers/UserController';

const route = Router();

const controllers = {
    userController: new UserController(),
    skillController: new SkillController(),
}

route.get("/users", controllers.userController.users);
route.get("/user", controllers.userController.findOneUser);
route.get("/skills", controllers.skillController.skills);
route.post("/users/create", controllers.userController.createUser);
route.post("/skill/create", controllers.skillController.skillCreate);

export default route;