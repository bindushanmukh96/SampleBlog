import {Request, Response} from "express";
import {PostController} from "../controllers/postController"

export class Routes {  
    public postController: PostController = new PostController()   
    
    public routes(app): void {   
        
        

        app.route('/').get(this.postController.getAllPosts);
// get method for adding new post and //posting an saving the new post in database
     app.route('/posts')
    .get(this.postController.getNewPosts)
    .post( this.postController.newPost)
   
    //Edit the post
    app.route('/posts/:id')
    .get( this.postController.getEditPost)
    .put(this.postController.editPost)
    
    // delete the post
    app.route('/posts/:id')
    .delete(this.postController.deletePost)

     // AboutUs
     app.route('/posts/aboutus')
     .get(this.postController.getAboutus)
     // readmore
     app.route('/posts/readmore/:id')
     .get(this.postController.getReadmore)
   
    }
}