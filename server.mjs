import express from 'express'
import path from 'path';
import monthRouter from './routes/months.mjs'
import dayRouter from './routes/days.mjs'
import noteRouter from './routes/notes.mjs'

const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended :true}))
app.use(express.json())

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(path.resolve(), 'public')));

app.get('/', (req, res)=>{
    res.sendFile((path.join(path.resolve(), 'public', 'form.html'))
)

})


app.listen(PORT, ()=>{
    console.log(`Server running in port ${PORT}`)
})