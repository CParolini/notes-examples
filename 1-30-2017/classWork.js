// Instructions:
// Create a website with four routes:
// Home
// Favorite Food
// Favorite Movies
// Favorite CSS Frameworks
// Each route should be triggered by a different URL.
// Each route should display an HTML page listing your favorite three things of each.
// Be sure to se fs to serve your HTML files.

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

// We need a function which handles requests and send response
function handleRequest(req, res) {

    // Capturing the url the request is made to.
    var urlParts = url.parse(req.url);

    // When we visit different urls, the switch statement call on different functions.
    switch (urlParts.pathname) {
        case "/":
            displayRoot(urlParts.pathname, req, res);
            break;
        case "/food":
            displayFood(urlParts.pathname, req, res);
            break;
        case "/frameworks":
            displayFramework(urlParts.pathname, req, res);
        case "/movies":
            displayMovie(urlParts.pathname, req, res);
            break;
        case "/alsifhaspidhsad":
            displayMichael(urlParts.pathname, req, res);
            break;
        default:
            display404(urlParts.pathname, req, res);
    }
}

// When we visit the "http://localhost:8080/" path, this function is run.
function displayRoot(url, req, res) {
    var myHTML = "<html>";
    myHTML += "<body><h1>Home</h1>";
    myHTML += "</body></html>";
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(myHTML);
}

// When we visit the "http://localhost:8080/food" path, this function is run.
function displayFood(url, req, res) {
    var myHTML = "<html>";
    myHTML += "<body><h1>Pizza</h1>";
    myHTML += "<h1>Pizza</h1>";
    myHTML += "</body><h1>Pizza</h1></html>";
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(myHTML);
}

// When we visit the "http://localhost:8080/frameworks" path, this function is run.
function displayFramework(url, req, res) {
    var myHTML = "<html>";
    myHTML += "<body><h1>Bootstrap</h1>";
    myHTML += "<h1>CSS</h1>";
    myHTML += "<h1>Google Formats</h1>";
    myHTML += "</body></html>";
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(myHTML);
}

function displayMovie(url, req, res) {
    var myHTML = "<html>";
    myHTML += "<body><h1>Boondock Saints</h1>";
    myHTML += "<h1>Space Jam</h1>";
    myHTML += "<h1>Devil Wears Prada</h1>";
    myHTML += "</body></html>";
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(myHTML);
}

function displayMichael(url, req, res) {
    var myHTML = "<html>";
    myHTML += "<body><img src='https://avatars1.githubusercontent.com/u/16672952?v=3&s=460'";
    myHTML += "</body></html>";
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

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
