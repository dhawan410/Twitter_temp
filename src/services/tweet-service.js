const {TweetRepository}=require('../Repository/index');
class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository();

    }
 async create(data){
    const content=data.content;
    const tags=content.match(/#[a-zA-Z0-9_]+/g);
    tags=tags.map((tag)=>tag.substring(1));
    console.log(tags);
    const tweet=await this.tweetRepository.create(data);
    // todo create hashtag and add here
    // 1.bulk create in mongoose
    //2.filter title of hashtag based on multiple tags
    //3. how to add tweet id inside all the hashtag 
    return tweet;
}
}
module.exports=TweetService;
/*
this is my #first #tweet .
*/