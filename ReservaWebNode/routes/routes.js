const express = require('express');
const router = express.Router();

//routes for parks
router.get('/parks', (req, res) => {
  res.send('List of users');
});

router.get('/parks/:id', (req, res) => {
  const parkId = req.params.id;
  res.send(`Details of park ${parkId}`);
});

router.post('/parks', (req, res) => {
  res.send('Create a new park');
});

router.put('/parks/:id', (req, res) => {
  const parkId = req.params.id;
  res.send(`Update park ${parkId}`);
});

router.delete('/parks/:id', (req, res) => {
  const parkId = req.params.id;
  res.send(`Delete park ${parkId}`);
});

//routes for reservation
router.get('/reservations', (req, res) => {
    res.send('List of reservations');
  });
  
  router.get('/reservations/:id', (req, res) => {
    const resId = req.params.id;
    res.send(`Details of reservation ${resId}`);
  });
  
  router.post('/reservations', (req, res) => {
    res.send('Create a new reservation');
  });
  
  router.put('/reservations/:id', (req, res) => {
    const resId = req.params.id;
    res.send(`Update reservation ${resId}`);
  });
  
  router.delete('/reservations/:id', (req, res) => {
    const resId = req.params.id;
    res.send(`Delete reservation ${resId}`);
  });


module.exports = router;