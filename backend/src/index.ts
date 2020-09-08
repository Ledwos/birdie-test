import app from './application';

const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 5000;

const db = require('knex')(({
  client: 'mysql',
  connection: {
    host: process.env.MS_HOST,
    user: process.env.MS_USER,
    password: process.env.MS_PASS,
    database: process.env.MS_DB
  }
}));

app.get('/test', (_,res) => {
  db('events')
  .select('*')
  .limit('3')
  .then((data: any) => {
    if (data.length === 0) {
      res.status(404).send({'error': 'no data found'});
    } else {
      res.json(data);
    }
  })
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});
