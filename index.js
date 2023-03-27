const http = require("http")

const PORT = process.env.PORT || 8080

const server = http.createServer()

server.on("request", (request, response) => {
    // handle request based on method then URL
    response.statusCode = 200
    response.write("Hello World!")
    response.end()
})

server.listen(PORT, err => {
    // error checking
    err ? console.error(err) : console.log(`listening on port ${PORT}`)
})