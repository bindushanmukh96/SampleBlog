"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const postModel_1 = require("../models/postModel");
const mongoose = require("mongoose");
// import * as ejs from 'ejs'
// import * as fs from 'fs'
const Post = mongoose.model('post1', postModel_1.postSchema);
class PostController {
    constructor() {
        //CRUD Operations
        this.getAllPosts = function (req, res) {
            Post.find({}, (err, posts) => {
                res.status(200).send(posts);
            });
        };
        //function to edit post
        this.getEditPost = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const posts = yield Post.findById(req.params.id);
                res.status(200).json({
                    "message": " the object  is edited",
                });
            });
        };
        //function to delete post
        this.deletePost = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const posts = yield Post.findById(req.params.id);
                yield Post.findByIdAndDelete(req.params.id);
                res.status(200).json({
                    "message": "deleted succesfully",
                    "datadeleted": posts
                });
            });
        };
        //function to edit post
        this.editPost = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                yield Post.findById(req.params.id, function (err, post) {
                    post.title = req.body.title,
                        post.descripton = req.body.descripton,
                        post.postedBy = req.body.postedBy,
                        post.category = req.body.category;
                    post.save(function (err, post) {
                        res.status(200).json({
                            "message": "the post edited succesfully",
                            "data": post
                        });
                    });
                });
            });
        };
        //function to add new post
        this.newPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const post = new Post({
                title: req.body.title,
                descripton: req.body.descripton,
                postedBy: req.body.postedBy,
                category: req.body.category
            });
            try {
                let postsaved = yield post.save();
                Post.find({}, (err, post) => {
                    // res.render('index2', { posts: post })
                    res.status(200).json({
                        "message": "post added successfuly",
                        "data": post
                    });
                });
            }
            catch (e) {
                res.send('Error');
            }
        });
        //Other functions
        //function to get AboutUs
        this.getAboutus = function (req, res) {
            // res.render('aboutUs')
            res.status(200).json({
                "message": "welcome"
            });
        };
        //function to get readmore
        this.getReadmore = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const posts = yield Post.findById(req.params.id);
                res.status(200).json({
                    "message": "retrieved successfully",
                    "data": posts
                });
                // res.render('readmore', { posts: posts })
            });
        };
        //function to get new posts
        this.getNewPosts = function (req, res) {
            res.status(200).send('new post added');
        };
    }
}
exports.PostController = PostController;
//# sourceMappingURL=postController.js.map