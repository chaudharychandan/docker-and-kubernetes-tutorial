const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
});

const key = 'visits';

client.set(key, 0);

app.get('/', (req, res) => {
  client.get(key, (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set(key, +visits + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening to port 8081');
});
