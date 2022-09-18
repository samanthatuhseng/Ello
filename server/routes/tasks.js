const router = require('express').Router();
let Task = require('../models/task.model.js');

router.route('/').get((req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const newTask = new Task({
        username,
        description,
        date,
    });

    newTask.save()
        .then(() => res.json('Task Assigned!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//returns a task item given an id
router.route('/:id').get((req, res) => {
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' + err));
});

//deletes a task item given an id
router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//save the updated object in the database
router.route('/update/:id').post((req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            task.username = req.body.username;
            task.description = req.body.description;
            task.date = Date.parse(req.body.date);

            task.save()
                .then(() => res.json('Task updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;