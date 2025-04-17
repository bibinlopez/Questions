const express = require('express');
const router = express.Router();

const {
  getFilter,
  getFn,
  questionAnswer,
  updateFn,
  deleteFn,
  uploadFn,
} = require('../controller/controller');

router.get('/', getFilter);
router.get('/:id',getFn);
router.post('/', questionAnswer);
router.put('/:id', updateFn);
router.delete('/:id', deleteFn);
router.post('/upload', uploadFn);

module.exports = router;
