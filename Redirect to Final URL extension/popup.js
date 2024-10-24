document.getElementById('getFinalUrlButton').addEventListener('click', async () => {
    const urlInput = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');
    const copyButton = document.getElementById('copyButton');

    if (!urlInput) {
        resultDiv.textContent = "Please enter a URL.";
        resultDiv.style.display = 'block';
        copyButton.style.display = 'none';
        return;
    }

    resultDiv.style.display = 'none';
    copyButton.style.display = 'none';
    resultDiv.textContent = '';

    try {
        const response = await fetch('https://url-redirect-final-destination.vercel.app/get-final-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: urlInput })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch the final URL.');
        }

        const data = await response.json();

        if (data.finalUrl) {
            resultDiv.innerHTML = `<a href="${data.finalUrl}" target="_blank">${data.finalUrl}</a>`;
            copyButton.style.display = 'block';
        } else {
            resultDiv.textContent = 'Error: Could not retrieve the final URL.';
        }

        resultDiv.style.display = 'block';
    } catch (error) {
        resultDiv.textContent = 'Error: ' + error.message;
        resultDiv.style.display = 'block';
        copyButton.style.display = 'none';
    }
});

document.getElementById('copyButton').addEventListener('click', () => {
    const resultText = document.getElementById('result').innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        alert('URL copied to clipboard!');
    });
});
