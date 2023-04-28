const { Router } = require('express')
const { getUsers, getUser, saveUser, updateUser, deleteUser } = require('./users.controller')

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', saveUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router