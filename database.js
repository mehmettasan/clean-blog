const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://mt-user1:Mt.1235@cluster0.1ve4u.mongodb.net/posts?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('db connected');
  })
  .catch((err) => {
    console.log(err);
  });
