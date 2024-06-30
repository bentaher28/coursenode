const express = require('express');
const router = express.Router();

const PostsController = require('../controller/PostsController');
const UsersController = require('../controller/UsersController');

router.get('/' , (req , res ) =>{
    res.json({
        msg : " mohammed bentaher",
        state : 1,
        data : [],
     })
});

router.post('/login' , UsersController.LoginUser);
router.post('/signup' , UsersController.SignUpUser);
router.get('/posts' , PostsController.GetAllPosts);


router.post('/register' , (req , res ) =>{
    res.json({
        msg : req.body,
     })
});









module.exports = router ;