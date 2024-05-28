import express from 'express'
import cors from 'cors'

import dotenv from 'dotenv'
dotenv.config()

import connectToDB from './db.js'
connectToDB()
import postsRoute from './routes/posts.js';

const PORT = process.env.PORT ? process.env.PORT : 5000
const app = express();

app.use(cors({
  origin: [process.env.FRONTEND],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}))

app.use('/posts', postsRoute);


app.get('/', (req, res) => {
  res.status(200).json({ "data": "data from server" })
})
app.get('/management-team/:slug', (req, res) => {

})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})