const express = require('express');
const router = express.Router();
const {createUser, getUsers, updateUser, deleteUser} = require('../utils/userUseCase');
const {authUserID} = require('../middlewares/auth');
const Message = require('../models/messagesModels');

// Get - Sí - Obtener todos los mensajes.
router.get('/messages', async(req, res) => {
    try {
        const messages = await Message.find(); //await getUsers();
        res.send({message: "All chat messages", data: messages});
    } catch (error) {
        res.status(400).send({message: error});
    }
})


module.exports = router;