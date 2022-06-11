import express from 'express';
import { getWorkloadById, getWorkloads, editWorkloads, createWorkloads, getWorkloadsByUser } from '../controller/workloadController.js';

const router = express.Router()

router.route('/').get(getWorkloads)

router.route('/user/:id').get(getWorkloadsByUser)

router.route('/:id').get(getWorkloadById)

router.route('/').post(createWorkloads)

router.route('/:id').put(editWorkloads)

export default router