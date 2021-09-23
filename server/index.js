const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express();
app.use(express.static('client'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

const port = process.env.PORT || 6969
app.listen(port, `Hello There ${port}`)