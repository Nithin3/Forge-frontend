const express = require('express');
const router = express.Router();

router.get("/transactions", (req, res) => {
   res.end('Transaction History');
});

module.exports = router;