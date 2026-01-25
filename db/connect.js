const mongoose = require('mongoose')

const connDB = (url) =>{
    return mongoose
        .connect(url)
        .then(()=>console.log('Connected to DB'))
}

module.exports = connDB