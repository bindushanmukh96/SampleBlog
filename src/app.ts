import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/route";
import * as mongoose from "mongoose";
import * as ejs from "ejs";
import * as methodoverride from "method-override";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
     public mongoUrl: string = 'mongodb://localhost/blog';
    
    constructor() {
        this.app = express();
        this.config(); 
        this.mongoSetup();       
        this.routePrv.routes(this.app);     
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
       this.app.set('view engine', 'ejs')
       this.app.use(methodoverride('_method'))
    }
    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true,useUnifiedTopology: true});        
    }
}

export default new App().app;