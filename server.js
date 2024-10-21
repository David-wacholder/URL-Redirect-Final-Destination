const express = require('express');
const axios = require('axios');
const https = require('https');
const cors = require('cors'); // הוספת CORS
const app = express();
const port = 3000;

// Middleware to enable CORS
app.use(cors()); // שימוש ב-CORS

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/get-final-url', async (req, res) => {
    let { url } = req.body;

    // בדוק אם ה-URL לא מתחיל ב-http:// או https://, ואם לא – הוסף https://
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    try {
        const agent = new https.Agent({  
            rejectUnauthorized: false
        });

        const response = await axios.get(url, {
            maxRedirects: 10,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            },
            httpsAgent: agent
        });

        const finalUrl = response.request.res.responseUrl || response.config.url;
        res.json({ finalUrl: finalUrl });
    } catch (error) {
        console.error('Error fetching the URL:', error);
        res.status(500).json({ error: 'Error fetching the URL', details: error.toString() });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
