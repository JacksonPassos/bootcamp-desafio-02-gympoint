import { Router } from 'express'

import UserController from './app/controllers/UserController'
import StudentController from './app/controllers/StudentController'
import SessionController from './app/controllers/SessionController'

import authMiddleware from './app/middlewares/auth'
import checkId from './app/middlewares/checkId'


const routes = new Router()

routes.post('/users', UserController.store)
routes.post('/login', SessionController.store)

routes.use(authMiddleware)
routes.put('/users', authMiddleware, UserController.update)
routes.post('/students', authMiddleware, StudentController.store)
routes.put('/students/:idStudent', authMiddleware, checkId, StudentController.update)





export default routes