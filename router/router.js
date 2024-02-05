const express = require('express');
const router = express.Router();

const {
  getFilter,
  questionAnswer,
  updateFn,
  deleteFn,
  uploadFn,
} = require('../controller/controller');

router.get('/', getFilter);
router.post('/', questionAnswer);
router.put('/', updateFn);
router.delete('/', deleteFn);
router.post('/upload', uploadFn);

module.exports = router;
