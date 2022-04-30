//Moduł http i moment-timezone
const http = require("http")
const moment_timezone = require('moment-timezone');

//Określenie portu serwera
const port = 3000

//Ustalenie daty odpalenia serwera
const today = new Date()
const day = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ', ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()

//Zmienne trzymające dane klienta
var ip = ''
var timezone = ''

//Pobranie danych klienta przez API
http.get({
    host: 'ip-api.com',
    path: '/json'
}, function (response) {
    response.on('data', function (d) {
        data = JSON.parse(d)
        ip = data.query
        timezone = data.timezone
    });
});

//Port, autor i dzień odpalenia serwera
log_mes = 'Port ' + port + '\n'
    + 'Wojciech Sarnowski\n'
    + 'Launched on ' + day

//utworzenie serwera http z odpowiednimi danymi
function process_request(req, res) {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")

    res.end(
        '<html><body>IP of the client: ' + ip + '<br>'
        + 'Client\'s date: ' + moment_timezone().tz(timezone).format('DD.MM.YYYY HH:mm:ss')
        + '<body><html>'
    )
}
const server = http.createServer(process_request)
//uruchomienie nasłuchiwania serwera
server.listen(port, () => {
    console.log(log_mes)
})
