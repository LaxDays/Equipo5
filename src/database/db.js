const mongoose = require('mongoose');
const URI = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.fj4rg22.mongodb.net/Kodemia`;

const connect = new Promise (async(resolve, reject) => {
    let conn = await mongoose.connect(URI);
    if(conn) resolve('Success connection DB ')
    reject('Error connection DB')
})

module.exports = {
    connect
}

