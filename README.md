# Sticky Notes App

A simple note-taking application built with Node.js, Express, and EJS for rendering views. This project allows users to log in, add, edit, and delete notes, and search notes by month.

## Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** EJS (Embedded JavaScript Templates)
- **Data Storage:** In-memory JavaScript objects (for simplicity in this example)

## Routes

### User Routes

- **GET `/users/login`**: Renders the login page with optional error messages.
  - **Query Parameters:**
    - `error` (optional): An error message to display on the login page.

- **POST `/users/login`**: Authenticates the user and redirects to add note page.
  - **Body Parameters:**
    - `email`: User's email address.
    - `password`: User's password.

- **GET `/users/:id`**: Retrieves all notes for a specific user.
  - **URL Parameters:**
    - `id`: User ID.

### Notes Routes

- **GET `/notes/add`**: Renders the add note page.
  - **Query Parameters:**
    - `userId`: User ID.

- **GET `/notes/all`**: Returns all notes as JSON.

- **POST `/notes/add`**: Adds a new note.
  - **Query Parameters:**
    - `userId`: User ID.
  - **Body Parameters:**
    - `day`: Day of the note.
    - `month`: Month of the note.
    - `note`: Content of the note.

- **DELETE `/notes/delete/:id`**: Deletes a note by ID.
  - **URL Parameters:**
    - `id`: Note ID.

- **PATCH `/notes/edit/:id`**: Edits a note by ID.
  - **URL Parameters:**
    - `id`: Note ID.
  - **Body Parameters:**
    - `day`: Day of the note.
    - `month`: Month of the note.
    - `note`: Content of the note.

### Month Routes

- **GET `/months/search/:id`**: Searches notes by month.
  - **URL Parameters:**
    - `id`: Month ID.

## Data Types

### User

```json
{
  "id": 1,
  "email": "silvina@mail.com",
  "password": "123456"
}

## Views

- **Login:** The login view is available at `/users/login`.
- **Add Note:** The add note view is available at `/notes/add`.

**Note:** Only the login and add notes have views. The rest of the routes should be tested using Postman or a similar API testing tool.
