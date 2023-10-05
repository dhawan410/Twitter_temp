const mongoose=require('mongoose');
const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String
    }

},{timestamps:true});
tweetSchema.virtual('contentwithemail').get(function process(){
    return `${this.content} \nCreated by: ${this.userEmail}`;
});
tweetSchema.pre('save',()=>{
    console.log("inside hook");
    next();
});


const Tweet=mongoose.model('Tweet',tweetSchema);
module.exports=Tweet;
