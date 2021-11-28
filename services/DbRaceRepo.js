const { Pool } = require('pg'); // import node-postgres

const pool = new Pool({ // create connection to database
  connectionString: process.env.DATABASE_URL,	// use DATABASE_URL environment variable from Heroku app
  ssl: {
    rejectUnauthorized: false // don't check for SSL cert
  }
});

const getRaces = (req, res) => {
    const getString = 'SELECT * FROM races';
    pool.query(getString) // send query to select all rows from the 'my_activities' table 
      .then(raceResults => {
          let races = raceResults.rows;
          res.json({ races });
      })
      .catch(err => {
        console.log(err);
        let races = getSampleResults();
        res.json({ races });
    });
}

const getSampleResults = () => {
    return [
        {
            'name': 'Westfield \'za Run',
            'city': 'Westfield, NJ',
            'distance': '5K',
            'pastDate': '07/25/21',
            'score': 57.8
        },
        {
            'name': 'Spring Lake 5',
            'city': 'Spring Lake, NJ',
            'distance': '5 miles',
            'pastDate': '05/10/21',
            'score': 85.4
        }
    ]
}


module.exports = { getRaces }