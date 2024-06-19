require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios =require('axios')
app.use(bodyParser.json());
const url = 'https://accounts.zoho.in/oauth/v2/token?refresh_token=1000.b5b878057607867ffbf6105914f86bc0.708cc6e90106bca43cfa9c3d7bef6972&client_id=1000.ZAFQ18UI8L0BV4FSRM8CRYHC6IMNWV&client_secret=eba8fcef95a0c67e1ab34397e21d7cfa8ebd06bfeb&grant_type=refresh_token';

var accesstoken='1000.9db5418359c84cde0c172254609b1c3d.ba87151f1d6b07f8a2d356f909770a25';

async function getAccessToken() {
  try {
    const response = await axios.post(url);
    accesstoken=response.data.access_token;
    // console.log('Response:', response.data.access_token);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}
async function createLead(data) {
  const url = "https://www.zohoapis.in/crm/v2/Leads";
  const Company = data.RESPONSE.SENDER_COMPANY +"hi";
  const Last_Name = data.RESPONSE.SENDER_NAME;
  const Phone = data.RESPONSE.SENDER_MOBILE;
  const newdata = { Company, Last_Name, Phone };
  try {
    const response = await axios.post(
      url,
      { data: [newdata] },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Lead created successfully:", response.data);
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response ? error.response.data : error.message
    );
  }
}
app.post("/indiamart/6dE-IpuZieAd7X5OjWVAjErINbxsqtpw", (req, res) => {
  try {
    // console.log(req.body);
    const data=req.body;
    createLead(data);
    res.status(200).send({
      code: 200,
      status: "Success",
    });
  } catch (error) {
    res.status(500).send({
      code: 500,
      status: "Internal Server Error",
      error: error.message,
    });
  }
});


const calc=60000*55;
setInterval(getAccessToken, calc);

app.get("/", (req, res) => {
  res.send("API Working new");
  res.status(200);
});
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});