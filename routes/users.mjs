import express from 'express'
import months from '../data/months.mjs'
import users from '../data/users.mjs'
import notes from '../data/notes.mjs'


const router = express.Router()

router.get('/login',(req,res)=>{
    res.render('login')
})

router.post('/login',(req,res)=>{
    const email = req.body.email
    const pwd = req.body.password

    const user = users.find(user => user.email == email  && user.password == pwd)
    const userId = user.id

    if(user){
        res.redirect(`/notes/add?userId=${userId}`)
    }
    else{
        res.send("Implement error handling here")
    }


})


export default router