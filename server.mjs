import express from 'express'
import monthRouter from './routes/months.mjs'
import dayRouter from './routes/days.mjs'
import noteRouter from './routes/notes.mjs'

const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended :true}))
app.use(express.json())
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('form')

})


app.listen(PORT, ()=>{
    console.log(`Server running in port ${PORT}`)
})