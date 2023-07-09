const express = require('express');
const router = express.Router();


/*router.get('/icer', (req, res) => {
   res.send('bienbenidos a ma inchadk');
});*/

const customerController = require('../controllers/customerController');
//const controller = require('../../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete);

router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);



module.exports = router;

