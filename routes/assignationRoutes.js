import express from 'express';
import { getAssignationById, getAssignations, editAssignations, createAssignations } from '../controller/assignationController.js';

const router = express.Router()

router.route('/user/:id').get(getAssignations)

router.route('/:id').get(getAssignationById)

router.route('/').post(createAssignations)

router.route('/:id').put(editAssignations)

export default router