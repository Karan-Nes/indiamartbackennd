require("dotenv").config();
const express = require("express");
const app = express();

app.post('/indiamart', (req, res) => {
    res.send('Indiamart');
    res.json(res.status(200))
});
// const url= encodeURIComponent("6dE+Ip6Xg+Qc6n5Pjm9OjErINbxsqtpw")
// app.post(
//   url,
//   (req, res) => {
//     res.send("hi");
//     console.log("api hit")
//     res.status(200)
//   }
// );
// console.log(url)
const url= encodeURIComponent("6dE-IpuZi-Md4H5BjWRBjErINbxsqtpw")

console.log(url)

app.post(
  "/indiamart/6dE-IpuZi-Md4H5BjWRBjErINbxsqtpw",
  (req, res) => {
    const data= req.body;
    console.log(data)
    console.log(data.body.CODE)
    try{
      res.status(data.body.CODE).send({
        code: data.body.CODE,
        status: data.body.STATUS,
        error:e
      });
    }catch(e){
      res.status(data.body.CODE).send({
        code: data.body.CODE,
        status: data.body.STATUS,
        error:e
      });
    }
    
  }
);

app.get("/", (req, res) => {
  res.send("API Working new");
  res.status(200);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
