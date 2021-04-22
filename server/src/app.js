const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined'))

app.get('/status', (req, res) => {
    res.send({
        message: 'Hello World'
    })
})

app.listen(process.env.PORT || 8081, () => {
    console.log(`server is running in the port ${process.env.PORT || 8081}`)
},)