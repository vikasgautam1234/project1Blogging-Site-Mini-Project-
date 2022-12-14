const express = require('express')
const router =  express.Router();

// Path for modules--------------------
const authorController = require('../controller/authorcontroller')
const blogController = require('../controller/blogcontroller')
const midAuth = require('../Middleware/commonMiddleware')


router.get('/firstapi' , function(req,res){
    res.send("Yes , it is first api")
})

// First router for creating author --------------
router.post('/authors', authorController.createAuthor)


//Api for log in -------------------------------------
router.post('/login',authorController.login)


// Second router for creating blog----------------
router.post('/blogs',    midAuth.authentication, blogController.createBlog)

// Third router for getting blogs ---------------
router.get('/blogs',midAuth.authentication, blogController.getBlog)

//Fourth router for updating blogs --------------
router.put('/blogs/:blogId' , midAuth.authentication, midAuth.authoriseAuhtor, blogController.updateAllBlogs)


// Fifth router for deleting blogs using path params -------
router.delete('/delete/:blogId', midAuth.authentication,  midAuth.authoriseAuhtor, blogController.deleteBlog)

// Sixth router for deleting blogs using query params------
router.delete('/blogs', midAuth.authentication, midAuth.authoriseAuthorfrmQuery, blogController.DeleteByQuery)

module.exports = router;


