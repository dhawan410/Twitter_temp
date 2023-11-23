const Hashtag=require('../models/hashtag');

class HashtagRepository{
    async create(data){
        try {
            const tag=await Hashtag.create(data);
            return tag;
        }
        catch(error){
            console.log(data);
        }

    }
    async get(id){
        try {
            const tag=await Hashtag.findById(id);
            return tag;
        }
        catch(error){
            console.log(error);
        }

    }
    async bulkCreate(data){
        try{
            const tag= await Hashtag.insertMany(data);
            return tag;
        }
        catch(error){
            console.log(error);
        }
    }
    async destroy(id){
        try {
            const response=await Hashtag.findByIdAndRemove(id);
            return response;
        }
        catch(error){
            console.log(error);
        }

    }
    async findByName(titleList){
        try{
            const tags=await Hashtag.find({
                title:titleList
            });
            return tags;
        }
        catch(error){
            console.log(error);
        }
    }

    }
        
    

module.exports=HashtagRepository;