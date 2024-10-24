document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('urlForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const urlInput = document.getElementById('urlInput').value;
        const resultDiv = document.getElementById('result');
        const copyButton = document.getElementById('copyButton');
        
        resultDiv.style.display = 'none';
        resultDiv.textContent = '';  // Clear previous result
        copyButton.style.display = 'none';

        try {
            const responseUrl = `https://url-redirect-final-destination.vercel.app/get-final-url?url=${encodeURIComponent(urlInput)}`;

            resultDiv.style.display = 'block';
            resultDiv.innerHTML = `<a href="${responseUrl}" target="_blank">${responseUrl}</a>`;
            copyButton.style.display = 'block';

            copyButton.addEventListener('click', function() {
                navigator.clipboard.writeText(responseUrl)
                    .then(() => {
                        copyButton.textContent = 'Copied!';
                        setTimeout(() => {
                            copyButton.textContent = 'Copy URL';
                        }, 2000);
                    })
                    .catch(err => console.error('Error copying to clipboard:', err));
            });

        } catch (error) {
            console.error('Error fetching the final URL:', error);
            resultDiv.style.display = 'block';
            resultDiv.textContent = 'Error: Could not fetch the final URL.';
        }
    });
});
