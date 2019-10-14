//Serving static files in Express
const express = require('express')
const app = express();
const port = 3000;

//Get Static Files
app.use(express.static(__dirname + '/../public/')) 

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))