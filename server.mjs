import express from 'express'
import path from 'path';
import monthRouter from './routes/months.mjs'
import userRoutes from './routes/users.mjs'
import noteRouter from './routes/notes.mjs'

const app = express()
const PORT = 3000

// Middleware to get data from body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Middleware for static files from the 'public' directory
app.use(express.static(path.join(path.resolve(), 'public')));

// Middleware loggin for testing
app.use((req, res, next) => {
    const time = new Date();
    console.log(`Log execution time: ${time.toLocaleTimeString()} \nRequest: ${req.method} URL: ${req.url}.`);

    if (req.body && Object.keys(req.body).length > 0) {
        console.log('Data:');
        console.log(JSON.stringify(req.body, null, 2)); // Print the JSON body
    }
    next();
});


// View engine
app.set('view engine', 'ejs')

// Routes 
app.use('/users', userRoutes)
app.use('/months', monthRouter)
app.use('/notes', noteRouter)


// Global error handling middlware
app.use((err, req, res, next) => {
    res.status(500).send(err)
})

// 404 Middleware
app.use((req, res) => {
    res.status(404);
    res.json({ error: 'Resource Not Found' });
});


app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})