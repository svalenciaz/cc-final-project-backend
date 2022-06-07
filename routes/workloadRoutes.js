import express from 'express';
import { getWorkloadById, getWorkloads, editWorkloads, createWorkloads } from '../controller/workloadController.js';

const router = express.Router()

router.route('/user/:id').get(getWorkloads)

router.route('/:id').get(getWorkloadById)

router.route('/').post(createWorkloads)

router.route('/:id').put(editWorkloads)

export default router