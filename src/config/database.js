const mongoose=require('mongoose');
const connect= async ()=>{
    await  mongoose.connect('mongodb://localhost/twitter_database');
}
module.exports=connect;