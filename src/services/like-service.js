
import {LikeRepository,TweetRepository}  from "../Repository/index.js";
class LikeService{
    constructor(){
        this.likeRepository= new LikeRepository();
        this.tweetRepository= new TweetRepository();

    }
    async toggleLike(modelId,modelType,userId){
        if (modelType=='Tweet'){
            var likeable=await this.TweetRepository.get(modelId).populate('likes');
        }
        else if(modelType =='Commet'){
            //Todo
        }
        else{
    throw new Error ('unknown model type');
        }
        const exists=await this.likeRepository.findByUserAndLikeable({
            user:userId,
            onmodel:modelType,
            likeable:modelId
        });
        if(exists){
            likeable.likes.pull(exists.id);

            await likeable.save();
            await exists.remove();
            var isAddded=false;

        }else{
           const newLike=await this.likeRepository.create({
            user:userId,
            onmodel:modelType,
            likeable:modelId
           })
           likeable.likes.push(newLike);
           await likeable.save();
           var isAddded=false;
        }
        return isAddded;


    }
}