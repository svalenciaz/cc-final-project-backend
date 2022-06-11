import express from 'express';
import { getUserById, getUsers, editUsers, createUsers } from '../controller/userController.js';

const router = express.Router()

router.route('/').get(getUsers)

router.route('/:id').get(getUserById)

router.route('/').post(createUsers)

router.route('/:id').put(editUsers)

export default router