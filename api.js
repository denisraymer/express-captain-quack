const express = require('express');
const router = express.Router();
const Mugger = require('./mugger');
const cors = require('cors');

const corsOptions = {
    origin: 'https://denisraimer.github.io',
    optionsSuccessStatus: 200
}

router.get('/products', cors(corsOptions), (request, response) => {
    Mugger.find({})
        .then(mugger => {
            response.send(mugger)
        })
});

router.post('/products', cors(corsOptions), (request, response) => {
    Mugger.create(request.body)
        .then(mugger => {
            response.send(mugger);
        });
});

router.put('/products/:id', cors(corsOptions), (request, response) => {
    Mugger.findByIdAndUpdate({_id: request.params.id}, request.body)
        .then(() => {
            Mugger.findOne({_id: request.params.id})
                .then(mugger => {
                    response.send(mugger);
                });
        });
});

router.delete('/products/:id', cors(corsOptions), (request, response) => {
    Mugger.deleteOne({_id: request.params.id})
        .then(mugger => {
            response.send(mugger);
        });
});

module.exports = router;
