const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HgxNPBegx3rSZs1bWAZj4D8ihrJ7p1vjXjoIuhKAT0YrrQQrG4E8uKW6XveE6RskWuOl0kQsbEnTDhfbVsb2uoU00AoNZRmKq');

// API

// App Config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (request,response)=> response.status(200).send('hello world'))

app.post('/payments/create',async(request,response)=>{
    const total = request.query.total;
    console.log('Patment Request Recieved BOom!! for this amount', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // sub units of the currency
        currency: "usd", 
    })

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// Listen command

exports.api = functions.https.onRequest(app);

//Example End point
// http://localhost:5001/clone-a1566/us-central1/api
