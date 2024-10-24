# 🌐 URL Redirect Final Destination 🚀

Welcome to **URL Redirect Final Destination** – a tool that takes your shortened, marketing, or any other redirected URL and reveals its final destination! 🔍🎯

No more guessing or wasting time clicking links just to find out where they lead. Let this tool do the hard work for you! 💡

## ⚙️ Features
- 🔗 Fetches the final URL from shortened or redirected links.
- 📋 Automatically adds `https://` if you forgot it!
- 🌍 API + Beautiful HTML interface for ease of use.
- 🖱️ **Chrome Extension Integration**: Quickly find and copy the final URL directly from your browser.

## 🚀 Live Demo
[Check out the live version here!](https://url-redirect-final-destination.vercel.app) 🔥

## 🌍 API Usage

### POST Request
Send a `POST` request to the `/get-final-url` endpoint with the JSON payload:

```bash
POST https://url-redirect-final-destination.vercel.app/get-final-url
Content-Type: application/json

{
  "url": "your-shortened-url-here"
}
```

Example response:
```json
{
  "finalUrl": "https://final-url.com"
}
```

### GET Request for Redirection
You can also use the `/get-final-url` endpoint with a `GET` request to perform an anonymous redirect to the final destination. This is useful when you want to avoid direct redirection from your IP.

#### Usage
```bash
https://url-redirect-final-destination.vercel.app/get-final-url?url=https://short.url/here
```

The server will follow the redirection chain and automatically redirect to the final destination.

## 🧩 Chrome Extension

### Features
- **Find Final URL:** Input a URL in the extension popup, and get the final destination link instantly.
- **Copy to Clipboard:** Easily copy the final URL to your clipboard using the "Copy" button.
- **Right-Click Integration:** Right-click on any link to quickly find the final URL from the context menu.

### Installation 🛠️

#### Option 1: Developer Mode 🧑‍💻
1. Download the source code and extract it to a folder.
2. Go to `chrome://extensions/` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the folder where you extracted the extension.

#### Option 2: Install CRX File 📦
1. [Download the CRX file](#).
2. Navigate to `chrome://extensions/`.
3. Drag and drop the CRX file into the browser's extensions page.
4. Confirm the installation.

#### Option 3: Download and Install the Zipped Extension 📁
1. [Download the ZIP file](#).
2. Extract it to a folder.
3. Go to `chrome://extensions/`.
4. Enable **Developer mode**.
5. Click **Load unpacked** and choose the folder with the extracted content.

### Usage
1. Click the extension icon to open the popup.
2. Enter the URL in the text box.
3. Click **Find URL** to see the final destination.
4. Use the **Copy URL** button to easily copy the result.

## 🛠️ Installation

### Prerequisites
- Node.js (version 18 or above)
- Git (optional, but recommended)

### Steps to Install Locally

1. **Clone the repository** 🧑‍💻
   ```bash
   git clone https://github.com/your-username/URL-Redirect-Final-Destination.git
   ```

2. **Navigate to the project folder** 📁
   ```bash
   cd URL-Redirect-Final-Destination
   ```

3. **Install dependencies** 📦
   ```bash
   npm install
   ```

4. **Run the server** 🖥️
   ```bash
   npm start
   ```

   By default, your server will run on `http://localhost:3000`.

## 🌍 API Usage

Send a `POST` request to the `/get-final-url` endpoint with the JSON payload:

```bash
POST http://localhost:3000/get-final-url
Content-Type: application/json

{
  "url": "your-shortened-url-here"
}
```

Example response:
```json
{
  "finalUrl": "https://final-url.com"
}
```

## 💻 Web Interface

You can also use the beautiful web interface provided at `http://localhost:3000`:

1. Enter your URL in the text box.
2. Press **"Get Final URL"**.
3. Copy or click on the final destination link!

## 🚀 Deployment

### Vercel Deployment (Full Stack) ⚡️

Deploying to Vercel is a breeze – here’s how to get your API and frontend live in minutes:

1. **Install the Vercel CLI** (if you haven’t already) 📥
   ```bash
   npm install -g vercel
   ```

2. **Log in to your Vercel account** (or create one at [Vercel](https://vercel.com/)) 👤
   ```bash
   vercel login
   ```

3. **Deploy the project** 🚀
   - Navigate to your project folder and run:
     ```bash
     vercel
     ```
   - Follow the prompts to set up your project. For most options, you can just press Enter to accept the defaults.
   - Vercel will automatically detect the framework and configure everything for you!

4. **Set the deployment settings** ⚙️
   - Make sure your `package.json` includes a start script:
     ```json
     "scripts": {
       "start": "node server.js"
     }
     ```
   - If you need to add any environment variables, go to your Vercel dashboard and set them under the "Environment Variables" section.

5. **Enjoy your live app!** 🎉
   - After deploying, Vercel will provide a live URL (e.g., `https://your-vercel-app.vercel.app`). Use this link to access your app.

6. **Update your HTML to use the Vercel URL** 🌍
   - Update the `apiUrl` in your JavaScript code:
     ```javascript
     const apiUrl = "https://your-vercel-app.vercel.app/get-final-url";
     ```

## 🛠️ Technologies Used

- **Node.js** for the backend
- **Express.js** for routing
- **HTML + CSS** for the web interface
- **Fetch API** for client-server communication

## 👨‍💻 Contributing

Feel free to fork, clone, and submit pull requests! We love contributors. 💡

## 📝 License

This project is licensed under the MIT License. Enjoy and modify as you like! 🎉

---
[![https://vercel.com?utm\_source=github\_readme\_stats\_team\&utm\_campaign=oss](https://raw.githubusercontent.com/anuraghazra/github-readme-stats/refs/heads/master/powered-by-vercel.svg)](https://vercel.com?utm_source=URL-Redirect-Final-Destination\&utm_campaign=oss)

<sub><sup>⚙️ This content was generated with the assistance of Gen AI.</sup></sub>
