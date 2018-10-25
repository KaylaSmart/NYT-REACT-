const axios = require("axios");
const db = require("../models");

//methods for the nytcontroller 

module.exports = {
    findAll: function(req, res) {
        const params = Object.assign(
            {api_key:"b9f91d369ff59547cd47b931d8cbc56b:0:74623931"},
            req.query
        );
        axios
            .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?"),({
                params
            })
            .then(response => {
                db.Article
                    .find()
                    .then(dbArticles =>
                        response.data.response.docs.filter(article =>
                            dbArticles.every(
                                dbArticle => dbArticle._id.toString() !== article._id
                            )
                        )
                    )
                    .then(articles => res.json(articles))
                    .catch(err => res.status(422).json(err));
            });
            
    }
};