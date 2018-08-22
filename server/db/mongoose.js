const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todoData", ()=> {
	console.log('mongoose connecting');
});


module.exports  = {mongoose};