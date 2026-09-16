let express = require('express');
let router = express.Router();
router.get('/employees', (req, res) => {
    res.send('employees called');
});
router.post('/assign tasks', (req, res) => {
    res.send('Task assigned to employee');
});
// create two more routes for tasks and notifications in get method
router.get('/tasks', (req, res) => {        
    res.send('tasks called');
});
router.get('/notifications', (req, res) => {        
    res.send('notifications called');
});
module.exports = router;