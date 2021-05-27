const Post = require('../model/Post');

exports.createPost= async (req, res)=>{
    await Post.create({
        ...req.body,
    })
    res.redirect('/');
}

exports.getAllPost= async(req, res)=>{
    let posts= await Post.find({}).sort('-dateCreated')
    res.render('index',{
        posts,
    })
}