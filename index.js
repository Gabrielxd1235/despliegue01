require('dotenv').config();

const http = require('http');

function requestController(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <html>
            <head>
                <title>Laboratorio 08</title>
            </head>
            <body>
                <h1>Bienvenidos al curso</h1>
                <p>Aplicación desplegada correctamente.</p>
            </body>
        </html>
    `);
}

const server = http.createServer(requestController);

const PORT = process.env.PORT || 4000;

server.listen(PORT, '0.0.0.0', function () {
    console.log('Aplicación corriendo en: ' + PORT);
});