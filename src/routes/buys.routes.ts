import { Router } from 'express';
import BuysController from '../controllers/buyses.controller';
import UsersController from '../controllers/users.controller';


const router = Router();

const buysController = new BuysController();
const userController = new UsersController();


router.get('/buyses', buysController.getAll);
router.post('/buyses', buysController.create);
router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/users', userController.create);

export default router;
