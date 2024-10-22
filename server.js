const express = require('express');
const axios = require('axios');
const https = require('https');
const cors = require('cors');
const path = require('path'); // הוספת path כדי להגיש קבצי HTML
const app = express();
const port = process.env.PORT || 3000;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get final URL
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

// Endpoint to get the final URL via GET and redirect to it
app.get('/get-final-url', async (req, res) => {
    let { url } = req.query;

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
        res.redirect(finalUrl); // מבצע רידיירקט לכתובת הסופית
    } catch (error) {
        console.error('Error fetching the URL:', error);
        res.status(500).json({ error: 'Error fetching the URL', details: error.toString() });
    }
});

// Serve the index.html file when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
