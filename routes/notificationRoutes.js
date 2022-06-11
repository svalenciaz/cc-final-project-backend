import express from 'express';
import { getNotificationById, getNotifications, editNotifications, createNotifications, getNotificationsByUser} from '../controller/notificationController.js';

const router = express.Router()

router.route('/').get(getNotifications)

router.route('/user/:id').get(getNotificationsByUser)

router.route('/:id').get(getNotificationById)

router.route('/').post(createNotifications)

router.route('/:id').put(editNotifications)

export default router