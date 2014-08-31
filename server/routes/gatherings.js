var Gathering = require('../models/gathering2');
var express = require('express');
var router = express.Router();

// Get All / Create
router.route('/gatherings')
    .get(function(req, res) {
        Gathering.find(function(err, gatherings) {
            if (err) {
                return res.send(err);
            }

            res.json(gatherings);
        });
    })
    .post(function(req, res) {
        var gathering = new Gathering(req.body);

        gathering.save(function(err) {
            if (err) {
                return res.send(err);
            }

            res.send({ message: 'Gathering Added' });
        });
    });

// Get One
router.route('/gatherings/:id').get(function(req, res) {
    Gathering.findOne({ _id: req.params.id}, function(err, gathering) {
        if (err) {
            return res.send(err);
        }

        res.json(gathering);
    });
});

// Update
router.route('/gatherings/:id').put(function(req,res){
    Gathering.findOne({ _id: req.params.id }, function(err, gathering) {
        if (err) {
            return res.send(err);
        }

        for (var prop in req.body) {
            gathering[prop] = req.body[prop];
        }

        // save the gathering
        gathering.save(function(err) {
            if (err) {
                return res.send(err);
            }

            res.json({ message: 'Gathering updated!' });
        });
    });
});

// Delete One
router.route('/gatherings/:id').delete(function(req, res) {
    Gathering.remove({
        _id: req.params.id
    }, function(err, gathering) {
        if (err) {
            return res.send(err);
        }

        res.json({ message: 'Successfully deleted' });
    });
});

module.exports = router;