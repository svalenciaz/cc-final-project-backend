import express from 'express';
import { getEvaluationById, getEvaluations, editEvaluations, createEvaluations } from '../controller/evaluationController.js';

const router = express.Router()

router.route('/').get(getEvaluations)

router.route('/:id').get(getEvaluationById)

router.route('/:id').put(editEvaluations)

router.route('/').post(createEvaluations)

export default router