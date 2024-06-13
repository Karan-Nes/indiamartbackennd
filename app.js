const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.post('/indiamart/6dE+Ip6Xg+Qc6n5Pjm9OjErINbxsqtpw', (req, res) => {
    res.send('API HIT');
    // console.log(res)
    // console.log(req)
    res.status(200).send('Data Received')
});
app.post('/indiamart', (req, res) => {
    res.send('Indiamart');
    console.log(res)
    console.log(req)
    res.json(res.status(200))
});
app.get('/', (req, res) => {
    res.send('API Working');
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});