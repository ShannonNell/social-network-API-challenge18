const { User } = require('../models');

const userController = {
    // GET all users
    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // GET user by id --> /api/users
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .then(dbUserData => {
                // if no user found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user with this id was found' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // CREATE a user --> /api/users
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    // UPDATE user by id --> /api/users/:id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user with this id was found' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
};

module.exports = userController;