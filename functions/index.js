
// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config();
// const Stripe = require("stripe")(process.env.STRIPE_KEY);

// // Initialize Stripe with the secret key from .env
// // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // Initialize Express app
// const app = express();

// // Configure CORS
// app.use(cors({ origin: true }));

// // Parse JSON requests
// app.use(express.json());

// // Test GET endpoint
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "successful!",
//   });
// });

// // Payment POST endpoint
// app.post("/payment/create", async (req, res) => {
//   const totalStr = req.query.total; // Get total as string

//   // Validate total (using the string value initially)
//   if (!totalStr || isNaN(totalStr) || parseFloat(totalStr) <= 0) {
//     return res.status(400).json({
//       error: "Invalid total amount. Total must be a positive number.",
//     });
//   }

//   try {
//     const total = parseFloat(totalStr); // Convert to number now
//     if (isNaN(total)) {
//       // Double check the result from parseFloat
//       return res.status(400).json({ error: "Invalid total amount." }); // Additional validation
//     }

//     const amountInCents = Math.round(total * 100); // Convert to cents and round

//     if (amountInCents < 50) {
//       //Stripe minimum amount

//       return res
//         .status(400)
//         .json({ error: "Amount must be at least 0.50 USD" });
//     }
//     const paymentIntent = await stripe.paymentIntents.create({
//       //Use stripe, not stripeInstance
//       amount: amountInCents,
//       currency: "usd",
//     });

//     return res.status(201).json({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     console.error("Error creating payment intent:", error);
//     return res.status(500).json({ error: "Failed to create payment intent" });
//   }
// });

// // Export the Express app as a Firebase Function
// exports.api = onRequest(app);


const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { setGlobalOptions } = require("firebase-functions");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
setGlobalOptions({maxInstances:10})
app.use(cors({ origin: true }));
// app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success!",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  console.log(req);

  if (total > 0) {
    // console.log("Payment received:", total);
    // res.send(⁠ Payment received: $${total} ⁠);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      message: "You have to select an item to paid.",
    });
  }
});

exports.api = onRequest(app);