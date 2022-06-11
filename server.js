import express from 'express';
import colors from 'colors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import assignationRoutes from './routes/assignationRoutes.js'
import bookRoutes from './routes/bookRoutes.js'
import evaluationsRoutes from './routes/evaluationRoutes.js'
import notificationRoutes from './routes/notificationRoutes.js'
import userRoutes from './routes/userRoutes.js'
import workloadRoutes from './routes/workloadRoutes.js'
 
dotenv.config()

connectDB()

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use('/api/assignations/', assignationRoutes)
app.use('/api/books/', bookRoutes)
app.use('/api/evaluations/', evaluationsRoutes)
app.use('/api/notifications/', notificationRoutes)
app.use('/api/users/', userRoutes)
app.use('/api/workloads/', workloadRoutes)

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} and listening on PORT ${PORT}`.blue)
  })

app.get('/', (req, res) => {
    res.send('API is running...')
})

