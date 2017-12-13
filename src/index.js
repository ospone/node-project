import express from 'express'
const app = express()

const hit = (req, res, next) => {
  console.log("Hit to /")
  next()
}

app.use((req, res, next) => {
  console.log("Incoming request !")
  next()
})

app.get('/', hit,
  (req, res) => res.end("Om Narayanaya Namaha!")
)

app.listen(3000, () => console.log("Listening on port 3000 !"))
