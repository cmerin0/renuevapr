const pool = require("../db")

const getUsers = async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM users;')
        if (res.status(200)) res.json(users.rows)
    } catch (e) {
        console.error(e.message);
    }
}

const getUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const user = await pool.query('SELECT * FROM users WHERE id_user = $1;', [id])
        if (res.status(200)) res.json(user.rows)
    } catch (e) {
        console.error(e.message);
    }
}

const saveUser = (req, res) => {
    try {
        const { username, password, email, id_type_user} = req.body;
        pool.query('INSERT INTO users (username, password, email, id_type_user) VALUES ($1, $2, $3, $4)', [ username, password, email, id_type_user ], (error, results) => {
            if (error) throw error.message;
            res.status(201).send('User Created Successfully!')
        })
    } catch (e) {
        console.error(e.message);
    }
}

const updateUser = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { username, password, email, id_type_user} = req.body;
        pool.query('UPDATE users SET username = $1, password = $2, email = $3, id_type_user = $4 WHERE id_user = $5', [ username, password, email, id_type_user, id ], (error, results) => {
            if (error) throw error.message;
            res.status(201).send('User Updated Successfully!');
        })
    } catch (e) {
        console.error(e.message);
    }
}

const deleteUser = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        pool.query('DELETE FROM users WHERE id_user = $1', [ id ], (error, results) => {
            if (error) throw error.message;
            res.status(201).send('User Deleted Successfully!');
        })
    } catch (e) {
        console.error(e.message);
    }
}

module.exports = { getUsers, getUser, saveUser, updateUser, deleteUser }