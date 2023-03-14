const http = require("http")
const port = 3000;

const rotas = {
  '/': 'Node course',
  '/books': 'Books page',
  '/about': 'Info about the project'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(rotas[req.url]);
})

server.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`)
})