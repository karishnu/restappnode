var express = require('express'),

router = express.Router();
var FoodItem   = require('./models/fooditem');

// invoked for any requested passed to this router
router.use(function(req, res, next) {
  console.log("MiddleWare loaded!");
  next();
});

router.get('/items',function(req, res) {
	console.log("GET for all items received!");
    FoodItem.find(function(err, items) {
        if (err)
            res.send(err);

        res.json(items);
    });
});

router.post('/items',function(req, res) {
        
        var item = new FoodItem();
        item.name = req.body.name;
		item.price = req.body.price;
		
		console.log("The following item was added! ");
		console.log(item.name);
		console.log(item.price);

        item.save(function(err) {
            if (err)
                res.send(err);

        res.json({ message: 'FoodItem created!' });
    });
});

router.delete('/items/:itemid', function(req, res){
	
	id = req.params.itemid;
	
	console.log("DELETE for " + id + "received! ");
	FoodItem.remove({
            _id: id
        }, function(err, item) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
} );

router.post('/itemdel', function(req, res){
	
	id = req.body.id;
	
	console.log("DELETE for " + id + " received! ");
	FoodItem.remove({
            _id: id
        }, function(err, item) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
} );

module.exports = router;