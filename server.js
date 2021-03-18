const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello, Express Here :)')
})

app.listen(port, () => {
  console.log(`express server listening on port ${port}`)
})