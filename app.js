const express = require('express');
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser');

const services = require('./services/requests')
const raceRepo = require('./services/DbRaceRepo')

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/races', (req, res) => {
  raceRepo.getRaces(req, res);
});

app.post('/api/activities', (req, res) => {
  services.addActivityToDB(req, res);
});

app.get('/api/activities/delete', (req, res) => {
  services.deleteAllActivites(req, res);
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
}) 