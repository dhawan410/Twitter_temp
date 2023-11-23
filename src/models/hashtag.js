const mongoose=require('mongoose');
const hashtagSchema=new mongoose.Schema({
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

const Hashtag=mongoose.model('Hashtag',hashtagSchema);
module.exports=Hashtag;
