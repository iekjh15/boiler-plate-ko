const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://iekjh15:joey7017@boilerplate.rdwyb.mongodb.net/<dbname>?retryWrites=true&w=majoritynpm',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/',(req, res) => res.send('Hello world! 2'))

app.listen(port,()=>console.log(`Example app listening an port ${port}!`))