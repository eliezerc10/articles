const mongoose = require('mongoose')

const ArticleSchema = mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String, required: true },
    publishedAt: { type: String, required: true }
});

module.exports = mongoose.model('articles', ArticleSchema)