const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dosenSchema = new Schema({
    IDDosen: {
        type: String
    },
    NamaDosen: {
        type: String
    },
    Alamat: {
        type: String
    },
    NoHp: {
        type: String
    }
    
}) 

module.exports = mongoose.model('dosen', dosenSchema)