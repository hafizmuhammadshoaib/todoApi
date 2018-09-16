const mongoose = require("mongoose");
mongoose.connect("mongodb://shoaib:shoaib123@ds219672.mlab.com:19672/firsdb");
mongoose.connection.once('open', () => {
    console.log("good to go");
}).on('error', error => {
    console.warn("Warning", error);
})
module.exports = mongoose;