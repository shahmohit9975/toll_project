var express = require('express');
var router = express.Router();
var Users = require('../models/user_model');

router.get('/:id?', function(req, res) {

    if (req.params.id) {
        Users.getUsersById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
        Users.getallusers(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.post('/',function(req,res,next){
    Users.adduser(req.body,function(err,rows){
      if(err)
      {
        res.json(err);
      }
      else{
        res.json(req.body);
      }
  
    });
      
  });
module.exports=router;