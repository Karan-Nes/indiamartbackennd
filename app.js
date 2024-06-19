require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser=require('body-parser')
const status = {
  method: "POST",
  json: true,
  headers: {
    "Content-Type": "application/json",
  },
  url: "http://webhook-endpoint.example-client.io/Client-generated-key",
  body: {
    CODE: 200,
    STATUS: "SUCCESS",
    RESPONSE: {
      UNIQUE_QUERY_ID: 621654886,
      QUERY_TYPE: "B",
      QUERY_TIME: "2024-04-10 11:17:14",
      SENDER_NAME: "Prabhat",
      SENDER_MOBILE: "+91-9999999999",
      SENDER_EMAIL: "abcdeprabhat@gmail.com",
      SUBJECT: "Requirement for Empty Mineral Water Bottle",
      SENDER_COMPANY: "ABC Pvt Ltd.",
      SENDER_ADDRESS: "Sec 135, Noida, Uttar Pradesh",
      SENDER_CITY: "Noida",
      SENDER_STATE: "Uttar Pradesh",
      SENDER_PINCODE: "201304",
      SENDER_COUNTRY_ISO: "IN",
      SENDER_MOBILE_ALT: "+91-8888888888",
      SENDER_PHONE: "0120-22222222",
      SENDER_PHONE_ALT: "0120-11111111",
      SENDER_EMAIL_ALT: "prabhatabcde@gmail.com",
      QUERY_PRODUCT_NAME: "Mineral Water Bottle",
      QUERY_MESSAGE:
        "I want to purchase an Empty Mineral Water Bottle. Kindly send me price and other details.Quantity: 100000 PieceProbable Order Value: Rs. 10 to 20 LakhProbable Requirement Type: Business Use",
      QUERY_MCAT_NAME: "Mineral Water Bottle",
      CALL_DURATION: "",
      RECEIVER_MOBILE: "",
    },
  },
  timeout: 10000,
};
app.use(bodyParser.json());
console.log(status);
app.post("/indiamart/6dE-IpuZieAd7X5OjWVAjErINbxsqtpw", (req, res) => {
  try {
    console.log(req.body);
    res.status(200).send({
      code: 200,
      status: "Success",
    });
  } catch (e) {
    res.status()
  }
});

app.get("/", (req, res) => {
  res.send("API Working new");
  res.status(200);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
