const express = require('express')
const mongoose = require('mongoose')
const { MONGOURL } = require('./keys')

const app = express()
const PORT = 5000

mongoose.connect(MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log('connected to mongo yeah!')
})
mongoose.connection.on('error', (err) => {
    console.log('error connecting', err)
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))


app.listen(PORT, () => {
    console.log('Server is running on', PORT)
})
