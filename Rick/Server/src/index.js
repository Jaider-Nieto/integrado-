const http = require('http');
const getChar = require('./Controllers/getCharById');

http.createServer( (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('rickandmortyapi.com/api/character/')){
        let id = request.url.split('/').at(-1)
        return getChar(res, id)
    }

}).listen(3001, 'localhost');