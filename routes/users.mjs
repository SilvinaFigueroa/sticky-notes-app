import express from 'express'
import months from '../data/months.mjs'
import users from '../data/users.mjs'
import notes from '../data/notes.mjs'
import e from 'express'


const router = express.Router()

router.get('/login', (req, res) => {
    // handling error in login
    const error = req.query.error;
    console.log('Rendering login view with error:', error); // Add this line for logging
    res.render('login', {error});
})

// Login view redirect 
router.post('/login', (req, res) => {
    const email = req.body.email
    const pwd = req.body.password
    // console.log (`email ${email} and pwd ${pwd}`)

    const user = users.find(user => user.email == email && user.password == pwd)
    console.log (`user found ${user}`)

    if (user) {
        const userId = user.id
        res.redirect(`/notes/add?userId=${userId}`)
    }
    else {
        // Redirect back to the login page with an error message
        const redirectUrl = `/users/login?error=Invalid credentials, please try again.`;
        // console.log('Redirecting to:', redirectUrl);
        res.redirect(redirectUrl);    }
})  

// Get all the notes of a user ID
router.get('/:id', (req, res) => {
    const userId = req.params.id

    const userNotes = notes.filter(note => note.userId == userId)
    res.json(userNotes)


})


export default router