const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/authenticate', authenticate);
router.get('/', getAll);
router.get('/createadmin', createAdmin);
router.post('/create', createNew);
router.put('/update', updateUser);
router.delete('/delete/:id', deleteUser);

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function createAdmin(req, res, next) {
    userService.createAdmin()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function createNew(req, res, next) {
    userService.createNew(req.body)
        .then(user => res.json(user))
        .catch(err => next(err));
}

function updateUser(req, res, next) {
    userService.updateUser(req.body)
        .then(user => res.json(user))
        .catch(err => next(err));
}

function deleteUser(req, res, next) {
    userService.deleteUser(req.params.id)
        .then(user => res.json(user))
        .catch(err => next(err));
}

module.exports = router;