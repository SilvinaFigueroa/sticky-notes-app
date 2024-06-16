import express from 'express'
import months from '../data/months.mjs'
import users from '../data/users.mjs'
import notes from '../data/notes.mjs'

// unique id generator
import { v4 as uuidv4 } from 'uuid'


const router = express.Router()


router.get("/add", (req,res)=>{
    res.render('notes')
})

router.post("/add", (req,res)=>{
    const userEmail = req.query
    
    notes.push({
        // {
        //     id: 1,
        //     userId: 1,
        //     day: 1,
        //     monthId: 6,
        //     content: 'Start of the month planning'
        // },

    })

})

export default router