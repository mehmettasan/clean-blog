const express = require('express');
const databasae=require('./database');
const ejs = require('ejs');
const postController=require('./controller/postController');

const app = express();

//template engine
app.set("view engine", "ejs");

//middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//route
app.get('/', postController.getAllPost)
app.get('/add_post', (req, res) => {
  res.render('add_post')
})
app.post('/cpost',postController.createPost)
app.get('/post', (req, res) => {
  res.render('post')
})
app.get('/about', (req, res) => {
  res.render('about')
})

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
