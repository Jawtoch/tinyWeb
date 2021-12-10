import express from "express"

const port = process.env.PORT || 80
const address = process.env.ADDRESS || '0.0.0.0'

const app = express()

app.get('/datetime', (req, res) => {
    const date = new Date()
    const isoString = date.toISOString()
    res.send(`${isoString}`)
})

app.listen(port, address, () => {
    console.log(`Running on ${address}:${port}`)
})