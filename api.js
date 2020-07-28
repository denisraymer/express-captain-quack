const express = require('express');
const router = express.Router();
const Mugger = require('./mugger');

router.get('/products', (request, response) => {
    Mugger.find({})
        .then(mugger => {
            response.send(mugger)
        })
});

router.post('/products', (request, response) => {
    Mugger.create(request.body)
        .then(mugger => {
            response.send(mugger);
        });
});

router.put('/products/:id', (request, response) => {
    Mugger.findByIdAndUpdate({_id: request.params.id}, request.body)
        .then(() => {
            Mugger.findOne({_id: request.params.id})
                .then(mugger => {
                    response.send(mugger);
                });
        });
});

router.delete('/products/:id', (request, response) => {
    Mugger.deleteOne({_id: request.params.id})
        .then(mugger => {
            response.send(mugger);
        });
});

module.exports = router;
