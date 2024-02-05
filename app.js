require('express-async-errors');
const express = require('express');
const app = express();
const router = require('./router/router');
// require('./questions.json');
const fileUpload = require('express-fileupload');

const morgan = require('morgan');
const errorHandler = require('./Middleware/errorHandler');
// const newData = require('./Middleware/data');
const { addId } = require('./controller/controller');

app.use(express.json());

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(morgan('tiny'));
app.use(addId);

// app.get('/', (req, res) => {
//   res.send('server is working');
// });

app.use('/', router);

app.use(errorHandler);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});
