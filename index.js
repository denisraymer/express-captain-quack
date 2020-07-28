const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {createServer} = require('http');
const url = 'mongodb+srv://dbUser:dbuser@cluster0.ueslo.mongodb.net/captain-quack?retryWrites=true&w=majority';
const port = process.env.PORT || 8080;
const app = express();
const cors = require('cors');

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use('/api', require('./api'));

app.use('/', (request, response) => {
    response.end('<h1>Hello world</h1>')
});

const server = createServer(app);
server.listen(port, () => console.log(`Server is up. port: ${port}`));
