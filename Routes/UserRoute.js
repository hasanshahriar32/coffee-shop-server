const express = require('express')
const { createUser, getUser, deleteUser, updateUser, singleUser } = require('../Controllers/useController')
const router = express.Router()


// define the home page route
router.get('/', getUser)

router.get('/:id', singleUser)

router.post('/user', createUser)

router.delete('/', deleteUser)

router.patch('/:id', updateUser)

module.exports = router