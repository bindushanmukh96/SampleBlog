"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postController_1 = require("../controllers/postController");
class Routes {
    constructor() {
        this.postController = new postController_1.PostController();
    }
    routes(app) {
        app.route('/').get(this.postController.getAllPosts);
        // get method for adding new post and //posting an saving the new post in database
        app.route('/posts')
            .get(this.postController.getNewPosts)
            .post(this.postController.newPost);
        //Edit the post
        app.route('/posts/:id')
            .get(this.postController.getEditPost)
            .put(this.postController.editPost);
        // delete the post
        app.route('/posts/:id')
            .delete(this.postController.deletePost);
        // AboutUs
        app.route('/posts/aboutus')
            .get(this.postController.getAboutus);
        // readmore
        app.route('/posts/readmore/:id')
            .get(this.postController.getReadmore);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=route.js.map