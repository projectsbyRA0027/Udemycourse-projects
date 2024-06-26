const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

//setting up middleware
app.use(bodyParser.urlencoded({extended:true}));


//setting the view engine using ejs
app.set('view engine','ejs');
let posts = [];

//Routes
app.get('/',(req,res)=>{
    res.render('index',{posts:posts});
});

app.get('/new',(req,res)=>{
    res.render('new-post')
});

app.post('/new',(req,res)=>{
    const post = {
        title: req.body.title,
        content: req.body.content
    };
    posts.push(post);
    res.redirect('/');
});

app.get('/post/:id',(req,res)=>{
    const post = posts[req.params.id];
    if(post){
        res.render('post',{post:post});
    }else{
        res.status(404).send('post not found')
    }
});

//start server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});