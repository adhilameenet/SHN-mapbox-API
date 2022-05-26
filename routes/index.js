var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();
var db = require('../config/dbconnection')
db.connect()
/* GET home page. */

router.get('/' , (req,res) => {
  res.render('index')
})
router.post('/' , (req,res) => {
  console.log(req.body);
  db.get().collection('userlocation').insertOne(req.body).then((response) => {
    console.log('data submitted');
    res.redirect('/')
  })
})

router.get('/view' , async(req,res) => {
  var userlocation = await db.get().collection('userlocation').find().sort({_id : -1}).limit(1).toArray()
  if(userlocation) {
    res.render('map' , {userlocation});
  }
})

module.exports = router;
