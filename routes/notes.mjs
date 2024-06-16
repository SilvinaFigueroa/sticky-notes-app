import express from 'express'
import months from '../data/months.mjs'
import users from '../data/users.mjs'
import notes from '../data/notes.mjs'

// unique id generator
import { v4 as uuidv4 } from 'uuid'


const router = express.Router()


router.get("/add", (req, res) => {
    res.render('notes')
})

router.get("/all", (req, res) => {
    res.json(notes)
})

router.post("/add", (req, res) => {
    const userId = parseInt(req.query.userId)
    const newNote =
    {
        id: uuidv4(),
        userId: userId,
        day: req.body.day,
        month: req.body.month,
        note: req.body.note
    }

    notes.push(newNote)

    res.send(`NOTE ADDED ${JSON.stringify(newNote)}`)

})

router.delete('/delete/:id', (req, res) => {
    try {
        const noteId = req.params.id
        // Filter the array notes removing the noteId
        const noteIndex = notes.findIndex(note => note.id == noteId)

        if (noteId === -1) {
            return res.status(404).send(`Note id ${noteId} not found`);
        } else {
            notes.splice(noteIndex, 1)
            res.send(`Note id ${noteId} deleted sucessfully`)
        }
    } catch (err) {
        res.status(400).json(err)
    }
})

router.patch('/edit/:id', (req, res) => {
    console.log(req.params.id)
    try {
        const noteId = req.params.id
        const noteIndex = notes.findIndex(note => note.id == noteId)
        console.log(`Note ID ${noteId} and Index ${noteIndex}`)

        if (noteIndex == -1) {
            return res.status(400).send(`Note id ${noteId} not found`)
        }
        else {
            notes[noteIndex] = {
                id: notes[noteIndex].id,
                userId: notes[noteIndex].userId,
                day: req.body.day,
                month: req.body.month,
                note: req.body.note
            }
            res.send(`Note id ${noteId} updated sucessfully`)

        }
    } catch (err) {
        res.status(400).json(err)
    }



})

export default router