// Create an HTML file with a form that will post data.
// Create a server that will accept the POSTed data and log it to the console.
// Note: You might have to do some Googling to figure this one out!

// Dependencies
var http = require("http");
var url = require("url");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Lets start our server
server.listen(PORT, function() {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

function handleRequest(req, res) {

    // Capturing the url the request is made to.
    var urlParts = url.parse(req.url);

    // When we visit different urls, the switch statement call on different functions.
    switch (urlParts.pathname) {
        case "/":
            displayRoot(urlParts.pathname, req, res);
            break;
        default:
            display404(urlParts.pathname, req, res);
    }
}

// When we visit the "http://localhost:8080/" path, this function is run.
function displayRoot(url, req, res) {
    var myHTML = "<html>";
    myHTML += "<body><form>First name: <input type='text' method='POST' action='/'></form>";
    myHTML += "</body></html>";
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    console.log(req);
    res.end(myHTML);
}

// When we visit any path that is not specifically defined, this function is run.
function display404(url, req, res) {
    res.writeHead(404, {
        "Content-Type": "text/html"
    });
    res.write("<h1>404 Not Found </h1>");
    res.end("The page you were looking for: " + url + " can not be found ");
}
