const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/indiamart', (req, res) => {
    res.send('Indiamart');
});
app.get('/', (req, res) => {
    res.send('API Working');
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});