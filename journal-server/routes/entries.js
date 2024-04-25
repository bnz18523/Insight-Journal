const router = require('express').Router();
const Entry = require('../models/entry.model');
const authenticate = require('./auth');

// Get all entries
router.route('/').get((req, res) => {
  Entry.find()
    .then((entries) => res.json(entries))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Add a new entry
router.route('/add').post(authenticate, (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const date = Date.parse(req.body.date);
  const user = req.user.userId; // Get user ID from the authenticated user

  const newEntry = new Entry({
    title,
    content,
    date,
    user,
  });

  newEntry
    .save()
    .then(() => res.json('Entry added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// ... (other routes)

module.exports = router;