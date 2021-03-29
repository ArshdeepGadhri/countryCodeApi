const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { request } = require('express');

//all
router.get('/', async (req,res) => {
    try{ 
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.status(400).send(err);
    }
});


router.get('/:id', async (req,res) => {
    try{    
        const post = await Post.findById(req.params.id.toLowerCase().replace("%20"," "));
        if (post==null) {
            res.json({"Error": "400"});
            res.status(400);
            return;
        };
        res.json(post);
                             
    }catch(err){
        res.status(400).send(err);
    }
});


router.get('/code/:id', async (req,res) => {
    try{    
        var iso = req.params.id.toUpperCase();
        const post = await Post.findOne({code: iso});
        if (post==null) {
            res.json({"Error":"There is no country with the Alpha2-ISO code: "+iso});
            res.status(400);
            return;
        };

        
        res.json(post);

    }catch(err){
        res.status(400).send(err);
    }
});


router.get('/code2/:id', async (req,res) => {
    try{    
        var iso = req.params.id.toUpperCase();
        const post = await Post.findOne({code2: iso});
        if (post==null) {
            res.json({"Error":"There is no country with the Alpha3-ISO code: "+iso});
            res.status(400);
            return;
        };

        res.json(post);
    }catch(err){
        res.status(400).send(err);
    }
});


module.exports = router;