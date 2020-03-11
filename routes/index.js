// Import express
const express = require('express');

// set router
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

// export file
module.exports = router;
