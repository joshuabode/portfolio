const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "/static/")))
app.use(express.static(path.join(__dirname, "/media/")))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/static/html/index.html"))
})

app.get('/work', (req, res) => {
  res.sendFile(path.join(__dirname, "/static/html/portfolio.html"))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "/static/html/about.html"))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, "/static/html/contact.html"))
})

app.get('/work/bubble-sorter', (req, res) => {
  res.sendFile(path.join(__dirname, "/static/html/bubblesorter.html"))
})

app.get('/work/statistical-calculator', (req, res) => {
  res.sendFile(path.join(__dirname, "/static/html/statisticalcalculator.html"))
})

app.get('/work/workflow', (req, res) => {
  res.sendFile(path.join(__dirname, "/static/html/workflow.html"))
})

app.get('/work/blue-petals', (req, res) => {
  res.sendFile(path.join(__dirname, "/static/html/bluepetals.html"))
})

app.get('/work/merolla', (req, res) => {
  res.sendFile(path.join(__dirname, "/static/html/merolla.html"))
})

app.get('/work/plus-one-global', (req, res) => {
  res.sendFile(path.join(__dirname, "/static/html/plusone.html"))
})

app.listen(port, () => {
  console.log(`Server started at: http://localhost:${port}`)
})


