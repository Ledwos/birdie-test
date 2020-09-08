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
  // .select(
  //   'id', 
  //   'event_type', 
  //   'visit_id', 
  //   'timestamp', 
  //   'caregiver_id',
  //   'care_recipient_id'
  //   )
  .select('care_recipient_id')
  // .limit('3')
  .then((data: any) => {
    if (data.length === 0) {
      res.status(404).send({'error': 'no data found'});
    } else {
      res.json(data.slice(300,-1));
    }
  })
});

app.get('/cr_id', (_,res) => {
  db('events')
  .select('care_recipient_id')
  .then((data: any) => {
    if (data.length === 0) {
      res.status(404).send({'error': 'no data found'});
    } else {
      let id_array: Array<String> = []
      for (let x = 0; x < data.length; x++) {
        id_array.push(data[x].care_recipient_id);
      }
      let unique_id = [... new Set(id_array)];
      res.json(unique_id);
    }
  })
});

app.get('/cr/:cr_id', (req,res) => {
  let cr_id: string = req.params.cr_id;
  db('events')
  .select('payload')
  .where({care_recipient_id: `${cr_id}`})
  .then((data: any) => {
    if (data.length === 0) {
      res.status(404).send({'error': 'no data found'});
    } else {
      res.json(data.length);
    }
  })
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});
