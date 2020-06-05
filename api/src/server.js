const express = require('express');
const bodyParser = require('body-parser');

const mongo = require('./clients/mongo');
const { sleep, generateRandomNum } = require('./utils');

const server = express();

server.use(bodyParser.json());

server.get('/health', (_, res) => {
    return res.sendStatus(204);
});

server.post('/users', async (req, res) => {
    const user = await mongo.user.create(req.body);
    await somethingSlow(user._id);
    
    return res.status(200).json(user);
});

async function somethingSlow(userID) {    
    const sleepSeconds = generateRandomNum(5, 15);
    await sleep(sleepSeconds * 1000);
    await mongo.user.updateOne({ _id: userID }, { $set: { processed: true } });

    return 
}

server.delete('/collections', async (req, res) => {
    await mongo.flushCollections();
    return res.sendStatus(200);
});

module.exports = server;