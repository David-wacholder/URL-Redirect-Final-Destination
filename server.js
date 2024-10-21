const express = require('express');
const axios = require('axios');
const https = require('https');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/get-final-url', async (req, res) => {
    const { url } = req.body;

    try {
        // Create an instance of axios that ignores SSL certificate validation
        const agent = new https.Agent({  
            rejectUnauthorized: false
        });

        // Fetch the URL and allow redirects up to 10 times
        const response = await axios.get(url, {
            maxRedirects: 10,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            },
            httpsAgent: agent  // Disable SSL certificate validation
        });

        // Check if there is a redirected URL
        const finalUrl = response.request.res.responseUrl || response.config.url;

        // Return the final URL after following the redirects
        res.json({ finalUrl: finalUrl });
    } catch (error) {
        // Log the error to the console and return a detailed message to the client
        console.error('Error fetching the URL:', error);
        res.status(500).json({ error: 'Error fetching the URL', details: error.toString() });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
