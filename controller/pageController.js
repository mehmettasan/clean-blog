const Post = require('../model/Post');

exports.showPost=async(req, res)=>{
    const post= await Post.findById(req.params.id)
    res.render('post',{
        post,
      })
       console.log(post)
}
exports.about= (req, res) => {
    res.render('about')
  }

  exports.addPost= (req, res) => {
    res.render('add_post')
  }