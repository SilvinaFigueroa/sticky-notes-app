# Sticky Notes App

A simple note-taking application built with Node.js, Express, and EJS for rendering views. This project allows users to log in, add, edit, and delete notes, and search notes by month.

## Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** EJS (Embedded JavaScript Templates)
- **Data Storage:** In-memory JavaScript objects (for simplicity in this example)

## Views

- **Login:** The login view is available at `/users/login`.
- **Add Note:** The add note view is available at `/notes/add`.

**Note:** Only the login and add notes have views. The rest of the routes should be tested using Postman or a similar API testing tool.

### Testing with Postman
- **Add Note:** `POST /notes/add?userId=1` with body `{ day, month, note }`
- **Get All Notes:** `GET /notes/all`
- **Delete Note:** `DELETE /notes/delete/:id`
- **Edit Note:** `PATCH /notes/edit/:id` with body `{ day, month, note }`
- **Search Notes by Month:** `GET /months/:id`

### User

```json
{
  "id": 1,
  "email": "silvina@mail.com",
  "password": "123456"
}


