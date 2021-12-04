const express = require('express');
const redis = require('redis');
const app = express();
const port = 8080;
const REDIS_URL = "redis://some-redis:6379";

const client = redis.createClient({
    url : REDIS_URL
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

process.on('SIGINT', function () {
    console.log("Caught interrupt signal");
    process.exit();
});