const http = require('http');

const app = {};

app.config = {};

app.createServer = () => {
    const server = http.createServer(handleReqRes);
}

app.handleReqRes = (req, res) => {
    res.send('Hello World');
}