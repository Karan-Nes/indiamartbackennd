require('dotenv').config();
const express = require('express');
const app = express();

app.post('/indiamart/6dE+Ip6Xg+Qc6n5Pjm9OjErINbxsqtpw', (req, res) => {
    console.log("api hit")
    // console.log(res)
    // console.log(req)
    // res.status(200).send('Data Received')
    res.send("API HIT")
});
app.post('/indiamart', (req, res) => {
    res.send('Indiamart');
    // console.log(res)
    // console.log(req)
    // res.json(res.status(200))
});
app.get('/', (req, res) => {
    res.send('API Working');
    res.status(200)
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});