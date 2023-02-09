const http = require('http');
const moment = require ('moment');
const member = require ('./member.js');
const user = require ('./user.js');

const server = http.createServer( (req, res) => {
    const url = req.url;
    res.statusCode = 200;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/plain');
        res.write('This is the home page');
    }else if(url === '/about'){
        res.setHeader('Content-Type', 'text/json');
        res.write(
            JSON.stringify({
                Status : 'Success',
                Message : 'response success',
                Description : `Exercise #03`,
                Date : moment().format(),
                Data : member
            })
        );
    }
    else if (url === '/user'){
        res.setHeader('Content-Type', 'text/json');
        res.write(
            JSON.stringify(user)
        )
    }
    res.end();
})

const hostname = '127.0.0.1'; // atau localhost
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});