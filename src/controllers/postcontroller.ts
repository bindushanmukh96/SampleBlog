import { postSchema } from "../models/postModel";
import * as mongoose from 'mongoose';
import  { Request, Response } from "express"
// import * as ejs from 'ejs'
// import * as fs from 'fs'

const Post=mongoose.model('post1',postSchema);

export class PostController{

    //CRUD Operations

   public getAllPosts = function(req:Request, res:Response) {
       
        Post.find({}, (err, posts) => {
            res.status(200).send(posts);
        });
    }

    //function to edit post
public getEditPost = async function(req:Request, res:Response) {
        const posts = await Post.findById(req.params.id)
        res.status(200).json({
            "message" :" the object  is edited",
            
        })
    }

    //function to delete post
public deletePost = async function(req:Request, res:Response) {
    const posts = await Post.findById(req.params.id)
        await Post.findByIdAndDelete(req.params.id);
  
        res.status(200).json({
            "message" : "deleted succesfully",
            "datadeleted":posts
        })
    }
    //function to edit post
public editPost = async function(req:Request, res:Response) {
    const date:String=new Date().toDateString();
    const time:String=date+" "+new Date().toLocaleTimeString();
        await Post.findById(req.params.id, function(err, post) {
            post.title = req.body.title,
                post.descripton = req.body.descripton,
                post.postedBy = req.body.postedBy,
                post.category=req.body.category,
                post.updatedAt=time,
            post.save(function(err, post) {
                res.status(200).json({
                    "message" :"the post edited succesfully",
                    "data":post
                })
            })
        })
    }
    //function to add new post
public newPost = async(req:Request, res:Response) => {
    const date:String=new Date().toDateString();
    const post = new Post({
        title: req.body.title,
        descripton: req.body.descripton,
        postedBy: req.body.postedBy,
        category:req.body.category,
        createdAt:date
    })
    try {
        let postsaved = await post.save()
        Post.find({}, (err, post) => {
            // res.render('index2', { posts: post })
            res.status(200).json({
                "message" : "post added successfuly",
                "data":post
                })

        });
    } catch (e) {

        res.send('Error')

    }

}
//Other functions
    //function to get AboutUs
    public getAboutus = function(req:Request, res:Response) {
        // res.render('aboutUs')
        res.status(200).json({
            "message":"welcome"
        })
    }
    //function to get readmore
public getReadmore = async function(req:Request, res:Response) {
        const posts = await Post.findById(req.params.id)
        res.status(200).json({
            "message":"retrieved successfully",
            "data":posts
        })

        // res.render('readmore', { posts: posts })

    }
        //function to get new posts
public getNewPosts = function(req:Request, res:Response) {
    res.status(200).send('new post added')
}
}