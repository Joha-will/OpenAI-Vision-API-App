const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
require('dotenv').config()
const fs = require('fs')
const OpenAI = require('openai')
const multer = require('multer')

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
