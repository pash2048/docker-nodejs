const express = require('express');
const redis = require('redis');
const app = express();
const port = 3000;
const REDIS_HOST = "127.0.0.1";
const REDIS_PORT = '6379';

const client = redis.createClient({
    host: REDIS_HOST,
    port: REDIS_PORT
});

client.on('error', err => {
    console.log('Error ON redis connection' + err);
    process.exit(1);
});

app.get('/', async (req, res) => {
    await client.connect();
    let name = await client.get('name');
    res.send(`Hello ${name}! \n`);
    client.disconnect();
})

app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
})