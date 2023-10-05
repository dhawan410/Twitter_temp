const express=require('express');
const connect=require('./config/database');
const app=express();

const TweetRepository=require('./Repository/tweet-Repository');

app.listen(3000, async ()=>{

    console.log('server started');
    await connect();
    console.log("mongodb connected");
    //const tweet=await Tweet.create({
    //      content:"third tweet",
    //      userEmail:"aman@mail.com"
    //});
    //console.log(tweet);
    //const tweets=await Tweet.find({userEmail:'aman@mail.com'});
    const tweetrepo=new TweetRepository();
    //const tweet=await tweetrepo.update('651d31ad9fc3ebdc5b9b7745',{content:'i m updating'});
    //const tweet= await tweetrepo.getAll(2,2);
    //console.log(tweet[0].contentwithemail);
    const tweet= await tweetrepo.create({
        content:"with hooks"
    });
    console.log(tweet);
});
