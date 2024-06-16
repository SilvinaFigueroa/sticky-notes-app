import express from 'express'
import months from '../data/months.mjs'
import users from '../data/users.mjs'
import notes from '../data/notes.mjs'

const router = express.Router()

router.get('/:id', (req,res)=> {

    const monthId = req.params.id
    const monthFilter = notes.filter(note => note.month == monthId)

    res.json(monthFilter)


})



export default router