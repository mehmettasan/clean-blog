const Post = require('../model/Post');

exports.showPost=async(req, res)=>{
    const post= await Post.findById(req.params.id)
    res.render('post',{
        post,
      })
}
exports.about= (req, res) => {
    res.render('about')
  }

  exports.addPost= (req, res) => {
    res.render('add_post')
  }
  exports.editPage= async(req, res)=>{
    const post= await Post.findById(req.params.id)
    res.render('edit',{
      post,
    })
  }