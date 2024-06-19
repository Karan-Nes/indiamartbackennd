require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios =require('axios')
app.use(bodyParser.json());
const url = 'https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.a4e41290ceb76e63530b4939494822c8.547e7fac8e38a9b0769282dd57439e72&client_id=1000.Z1DCGPJE2Q1I439DDEWPTPIMUCENSZ&client_secret=b4de458d929ac86cc9034df576637584b38e1338fd&grant_type=refresh_token';

var accesstoken='1000.a4a4049732a8bee7aa20dab0595a1b1a.0c466669e755af69ec375773b29f4ed2';

async function getAccessToken() {
  try {
    const response = await axios.post(url);
    accesstoken=response.data.access_token;
    // console.log('Response:', response.data.access_token);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}
async function createLead(testdata,accesstoken) {
  const url = "https://www.zohoapis.com/crm/v2/Leads";
  const Company = testdata.RESPONSE.SENDER_COMPANY +"hi";
  const Last_Name = testdata.RESPONSE.SENDER_NAME;
  const Phone = testdata.RESPONSE.SENDER_MOBILE;
  const newdata = { Company, Last_Name, Phone };
  console.log(newdata)
  try {
    const response = await axios.post(
      url,
      { data: [newdata] },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accesstoken}`,
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
  // console.log(req.body)
  const testdata=req.body
  try {
    // console.log(req.body);
    console.log(accesstoken)
    createLead(testdata,accesstoken);
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


// const calc=60000*55;
// setInterval(getAccessToken, calc);

app.get("/", (req, res) => {
  res.send("API Working new");
  res.status(200);
});
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
