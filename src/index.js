import express from 'express';
import bodyParser from 'body-parser';

import {connect} from './config/database.js';

import apiRoutes from './routes/index.js';
import {UserRepository, tweetRepository} from './Repository/index.js'
import LikeService from './services/like-service.js'
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);


app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    const userRepo=new UserRepository();
    const tweetRepo=new  tweetRepository();
    const tweets= await tweetRepo.getAll(0,10);
    const user=await userRepo.create({
        email:'aman@gmail.com',
        password:'1234',
        name:'aman'
    });
    const likeService=new LikeService();
    await likeService.toggleLike(tweets[0].id,'Tweet',user.id);
});