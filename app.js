const express = require('express');
const databasae=require('./database');
const ejs = require('ejs');
const postController=require('./controller/postController');
const pageController=require('./controller/pageController');

const app = express();

//template engine
app.set("view engine", "ejs");

//middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//route
app.get('/', postController.getAllPost)
app.get('/add_post',pageController.addPost)
app.post('/cpost',postController.createPost)
app.get('/about',pageController.about)
app.get('/posts/:id',pageController.showPost)

app.get('*',(req, res)=>{
  res.status(404)
  res.send('404 Sayfa bulunamadı...')
})

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
