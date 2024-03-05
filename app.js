require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./src/routes/users.js');
const messagesRoutes = require('./src/routes/message.js');

const mongoDB = require('./src/database/db.js');

app.use(express.json());

app.use('/users', userRoutes)
app.use('/chat', messagesRoutes)

mongoDB.connect.then((message) => {
    console.log(message)
    app.listen(port, () => {
        console.log("Server is listening on port", port);
    })
}).catch((error) => {
    console.log(error);
})

