"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.postSchema = new mongoose.Schema({
    title: String,
    descripton: String,
    postedBy: String,
    category: String,
});
//# sourceMappingURL=postModel.js.map