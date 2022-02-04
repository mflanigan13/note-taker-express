// importing modules
const path = require('path');
const router = require('express').Router();

// routing methods
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// export
module.exports = router;