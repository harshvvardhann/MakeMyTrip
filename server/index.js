const express = require('express');
const paypal = require('paypal-rest-sdk');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())
// PayPal configuration
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'Abce7Kt6bMJVUrJZ3rFeQP1uxOblZjVanMj4vaYA0B9YkugWbYzvtRMw3_5AvwgwBlmFHuw33IlLF98r',
    'client_secret': 'EO4M_8TVs8pDVuAkeF1ZLtJjZgB0nUuv6cLuWTIntrt_BJ-VmWjfKQQpWFCt8Yzh47V1xkc0FGlocfVv'
});

// Define routes
// Add routes for payment initiation, success, and failure

app.post('/payment', async (req, res) => {
    let data;
    try {
        const {amount} = req.body;
        const conversionRate = 0.012; 
        const amountUSD = (amount * conversionRate).toFixed(2);
        console.log("Received Amount:",amount);
        let create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:3000/success?status=success",
                "cancel_url": "http://localhost:3000/failed?status=failed"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item",
                        "sku": "item",
                        "price": amountUSD,
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": amountUSD
                },
                "description": "This is the payment description."
            }]
        };


        await paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                console.log("Create Payment Response");
                // console.log(payment);
                data = payment;
                res.json(data);

            }
        });


    } catch (error) {
        console.log(error);
    }
})



app.get('/success', async (req, res) => {

    try {

        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;

        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": amountUSD
                }
            }] 
        }


        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                console.log(error)
                return res.redirect("http://localhost:3000/failed?status=failed");
            } else {
                console.log("Execute Payment Response");
                // console.log(payment);
                const response = JSON.stringify(payment);
                const parsedResponse = JSON.parse(response);

                const transactions = parsedResponse.transactions[0];

                console.log("transactions", transactions);

                return res.redirect("http://localhost:3000/success?status=success");
            }
        })


    } catch (error) {
        console.log(error);
    }

})


app.get('/failed', async (req, res) => {

    return res.redirect("http://localhost:3000/failed?status=failed");
})

// Start the server
app.listen(8000, () => {

    console.log('Server is running on port 8000');
});
