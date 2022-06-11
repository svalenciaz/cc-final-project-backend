import express from 'express';
import { getAssignationById, getAssignations, editAssignations, createAssignations, getAssignationsByUser } from '../controller/assignationController.js';

const router = express.Router()

router.route('/').get(getAssignations)

router.route('/user/:id').get(getAssignationsByUser)

router.route('/:id').get(getAssignationById)

router.route('/').post(createAssignations)

router.route('/:id').put(editAssignations)

export default router