const mongoose=require('mongoose');
const hashtag=new mongoose.Schema({
    title:{
        type:String,
        required:true,
       
    },
   
    tweet:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'hashtag'
        }
    ]

},{timestamps:true});

const Hashtag=mongoose.model('Tweet',tweetSchema);
module.exports=Hashtag;
