import express from 'express';
import { getEvaluationById, getEvaluations, editEvaluations } from '../controller/evaluationController.js';

const router = express.Router()

router.route('/user/:id').get(getEvaluations)

router.route('/:id').get(getEvaluationById)

router.route('/:id').put(editEvaluations)

export default router