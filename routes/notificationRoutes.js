import express from 'express';
import { getNotificationById, getNotifications, editNotifications, createNotifications } from '../controller/notificationController.js';

const router = express.Router()

router.route('/user/:id').get(getNotifications)

router.route('/:id').get(getNotificationById)

router.route('/').post(createNotifications)

router.route('/:id').put(editNotifications)

export default router