import mongoose from "mongoose";
const likeSchema=new mongoose.Schema({
    onmodel:{
        type:String,
        required:true,
        enum:['Tweet','Comment']
    },
    likeable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onmodel'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        refPath:'user',
        required:true
    }
},{timestamps:true});
const Like=mongoose.model('Like',likeSchema);



 //refpath->dynamic path 