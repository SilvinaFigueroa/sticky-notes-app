import express from 'express'
import months from '../data/months.mjs'
import users from '../data/users.mjs'
import notes from '../data/notes.mjs'



const router = express.Router()


router.get("/add", (req,res)=>{
    res.render('form')
})


export default router