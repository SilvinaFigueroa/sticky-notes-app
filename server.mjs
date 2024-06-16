import express from 'express'
import path from 'path';
import monthRouter from './routes/months.mjs'
import userRoutes from './routes/users.mjs'
import noteRouter from './routes/notes.mjs'

const app = express()
const PORT = 3000

// Middleware to get data from body
app.use(express.urlencoded({ extended :true}))
app.use(express.json())
// Middleware for static files from the 'public' directory
app.use(express.static(path.join(path.resolve(), 'public')));

// View engine
app.set('view engine', 'ejs')

// Routes 
app.use('/users', userRoutes)
app.use('/months', monthRouter)
app.use('/notes', noteRouter)


app.get('/', (req, res)=>{


})

// Global error handling middlware
app.use((err,req,res,next)=>{
    res.status(500).send("Something is not working")
})


app.listen(PORT, ()=>{
    console.log(`Server running in port ${PORT}`)
})