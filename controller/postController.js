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

exports.deletePost= async(req, res)=>{
    await Post.findByIdAndRemove({_id : req.params.id})
    res.redirect('/')
}
exports.updatePost=async(req, res)=>{
    const post = await Post.findById(req.params.id)
    post.title= req.body.title
    post.detail=req.body.detail
    post.dateCreated=Date.now()
    post.save();

    res.redirect(`/posts/${post.id}`)
}