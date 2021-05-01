const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/uts_alityudia',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() =>{
  console.log('berhasil connect ke database')
}).catch((e) =>{
  console.log(e)
  console.log('gagal connect ke database')
})



app.use(bodyParser.json({
    extended: true,
    limit:'20mb'
}))

app.use(bodyParser.urlencoded({
    extended: true,
    limit:'20mb'
}))


app.use('/dosen/', require('./routes/dosen'))

app.listen(3000, () =>{
    console.log('Server Mulai')
})