const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const artist = require('./controllers/Artist');

require('dotenv').config({
  path: path.join(__dirname, './settings.env'),
});

const app = express();
mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true });
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello MongoDb!'));
app.post('/artist', artist.post);
app.get('/artist', artist.list);
app.get('/artist/:artistId', artist.get);

app.listen(3000, () => console.log('It works!'));
