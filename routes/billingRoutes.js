const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
    app.post('/api/stripe', (req, res) => {
        stripe.charges.create({
            amount: 500,
            current: 'usd',
            description: '$5 for 5 Credits',
            source: req.body.id
        });
    });
};