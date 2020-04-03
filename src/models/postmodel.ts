
import * as mongoose from 'mongoose';

export  const postSchema = new mongoose.Schema({
        title: String,
        descripton: String,
        postedBy: String,
        category:String,
        createdAt:String,
        updatedAt: String,
    })