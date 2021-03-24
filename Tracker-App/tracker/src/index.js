require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRotes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');
const trackRoutes = require('./routes/trackRoutes')
const app = express();

app.use(bodyParser.json());
app.use(authRotes);
app.use(trackRoutes);

const mongoUri = '';

mongoose.connect(mongoUri, {
//Please reach out for the source code
});

mongoose.connection.on('connected', () => {
    console.log('YAAAY You are Connected to mongo!');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Listening on Port 3000'); // 27017 mongodb default port
});