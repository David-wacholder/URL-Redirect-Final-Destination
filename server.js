const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/get-final-url', async (req, res) => {
    const { url } = req.body;

    try {
        const response = await axios.get(url, { maxRedirects: 5 });
        res.json({ finalUrl: response.request.res.responseUrl });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching the URL' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
