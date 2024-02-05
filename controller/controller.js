let data = require('../questions.json');

const addId = async (req, res, next) => {
  data = data.map((item, index) => {
    return { id: index + 1, ...item };
  });
  next();
};

const getFilter = async (req, res) => {
  let { question, answer, skip, limit } = req.query;

  let result = data.filter((item) => {
    if (question && answer) {
      return item.question.includes(question) && item.answer === answer;
    }

    if (question) {
      return item.answer === answer;
    }

    return answer ? item.answer === answer : item;
  });

  skip = Number(skip) || 0;
  limit = Number(limit) || 10;

  result = result.slice(skip, limit + skip);

  res
    .status(200)
    .json({ success: true, data: { nbhits: result.length, result } });
};

const questionAnswer = async (req, res) => {
  const { question, answer } = req.body;
  console.log(question, answer);
  if (!question || !answer) {
    throw new Error('Invalid input fields');
  }

  const result = data.find((item) => {
    return item.question === question && item.answer === answer;
  });

  if (!result) {
    console.log('no result');
    throw new Error('Invalid Answer');
  }

  res.status(200).json({ success: true, msg: 'The answer is correct' });
};

const updateFn = async (req, res) => {
  const { id } = req.params;

  const result = data.find((item, index) => {
    questinIndex = index;
    return item.id == id;
  });

  if (!result) {
    throw new Error(`No document in this id: ${id}`);
  }

  data[questinIndex] = {
    ...data[questinIndex],
    ...req.body,
  };

  res.status(200).json({ success: true, data: data[questinIndex] });
};

const deleteFn = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  let questinIndex;
  const result = data.find((item, index) => {
    questinIndex = index;
    return item.id == id;
  });
  console.log(result);
  if (!result) {
    throw new Error(`No document in this id: ${id}`);
  }

  data.splice(questinIndex, 1);

  res.status(200).json({ success: true });
};
const uploadFn = async (req, res) => {
  console.log(req.files.foo);
  res.status(200).json({ success: true });
};

module.exports = {
  addId,
  getFilter,
  questionAnswer,
  updateFn,
  deleteFn,
  uploadFn,
};
