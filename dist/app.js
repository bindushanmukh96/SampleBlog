"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const route_1 = require("./routes/route");
const mongoose = require("mongoose");
const methodoverride = require("method-override");
class App {
    constructor() {
        this.routePrv = new route_1.Routes();
        this.mongoUrl = 'mongodb://localhost/blog';
        this.app = express();
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.set('view engine', 'ejs');
        this.app.use(methodoverride('_method'));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map