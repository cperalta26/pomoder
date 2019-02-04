const express = require('express')
const app = express()

app.get('/', (req, res, next) => res.send('<h1>Connected to boiler maker on port 3000</h1>'))

app.listen(3000, () => {
  console.log('Listening on port 3000')
})