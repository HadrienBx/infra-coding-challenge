const server = require('./server');
const mongo = require('./clients/mongo');

(async () => {
    await mongo.connect();
    await mongo.flushCollections();
    
    let http = server.listen(9000, () => {
        console.log('Server listening on port 9000');
    });

    let poop = 0;
    let morepoop = 0;


    http.on('connection', (con) => {
        poop++;
        console.log(poop);

        con.on('request', (req) => {
            morepoop++;
            console.log(morepoop)
        })
    });

    process.on('SIGINT', () => {
        http.close(() => {
            console.log('No longer accepting connections.');
        });
    })
})();