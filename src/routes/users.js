const express = require('express');
const router = express.Router();
const {createUser, getUsers, updateUser, deleteUser} = require('../utils/userUseCase');
const {authUserID} = require('../middlewares/auth');
const User = require('../models/users');

// Post - Publica usuario nuevo.
router.post('/', async(req, res) => {
    try {
        const user = req.body
        const newUser = await User.create(user);//await createUser(user)
        await newUser.save();
        res.status(201).send({message: "User created", data: newUser});
    } catch (error) {
        res.status(400).send({message: error});
    }
})

// Post - Sí - Login.
router.post('/login', async(req, res) => {
    try {
        const user = {email, password} = req.body
        const users = await User.findOne({email: email});
        if (!user || user.password != password) {
            res.status(401).send({message: "Invalid email or password"});
        } else {
            res.status(201).send({message: "Login Success", data: "token" })
        }

    } catch (error) {
        res.status(400).send({message: error});
    }
})

// Get - Sí - Obtener todos los usuarios.
router.get('/', async(req, res) => {
    try {
        const users = await User.find(); //await getUsers();
        res.send({message: "All users", data: users});
    } catch (error) {
        res.status(400).send({message: error});
    }
})

// Get - Sí - Obtener por email.
router.get('/:email', async(req, res) => {
    try {
        const {email} = req.params;
        const users = await User.find({email: email}); //await getUsers();
        res.send({message: "All users", data: users});
    } catch (error) {
        res.status(400).send({message: error});
    }
})

// Put - Actualiza usuario.
router.put('/:id', authUserID, async(req, res) => {
    try {
        const user = req.body
        const  { id } = req.params
        const updatedUser = await User.findByIdAndUpdate(id, user, {returnOriginal: false}); //await updateUser(id, user);
        res.send({message: "User updated", data: updatedUser});
    } catch (error) {
        res.status(400).send({message: error});
    }
})

// DELETE - Elimina usuario
router.delete('/:id', authUserID, async(req, res) => {
    try {
        const  { id } = req.params
        //await deleteUser(id);
        await User.findByIdAndDelete(id);
        res.send({message: "User deleted"})
    } catch (error) {
        res.status(400).send({message: error});
    }
})


module.exports = router;