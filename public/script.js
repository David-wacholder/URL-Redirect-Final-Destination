document.getElementById('urlForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const urlInput = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');
    const copyButton = document.getElementById('copyButton');

    resultDiv.style.display = 'none';
    resultDiv.textContent = '';  // Clear previous result
    copyButton.style.display = 'none';  // Hide the copy button

    try {
        const apiUrl = `${window.location.origin}/get-final-url`; // יצירת כתובת דינמית ל-Vercel

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: urlInput })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.finalUrl) {
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = `<a href="${data.finalUrl}" target="_blank">${data.finalUrl}</a>`;
            copyButton.style.display = 'block';

            // Add click event for the copy button
            copyButton.addEventListener('click', function() {
                const tempInput = document.createElement('input');
                document.body.appendChild(tempInput);
                tempInput.value = data.finalUrl;
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy URL';
                }, 2000);
            });
        } else {
            resultDiv.style.display = 'block';
            resultDiv.textContent = 'Error: Could not fetch the final URL.';
        }
    } catch (error) {
        resultDiv.style.display = 'block';
        resultDiv.textContent = 'Error: An error occurred while fetching the URL.';
        console.error('Error fetching the final URL:', error);
    }
});
