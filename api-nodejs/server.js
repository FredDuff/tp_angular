const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require('./routes/auth');
const twRoutes = require('./routes/tw');

const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', authRoutes);
app.use('/tw', twRoutes);

app.listen(PORT, function() {
  console.log('Server running on localhost:' + PORT);
})
