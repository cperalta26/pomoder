const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
app.use(express.static(path.join(__dirname, '../..', 'public' )))

// logger middleware setup
const morgan = require('morgan')
app.use(morgan('dev'))

// starting the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})