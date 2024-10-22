# 🌐 URL Redirect Final Destination 🚀

Welcome to **URL Redirect Final Destination** – a tool that takes your shortened, marketing, or any other redirected URL and reveals its final destination! 🔍🎯

No more guessing or wasting time clicking links just to find out where they lead. Let this tool do the hard work for you! 💡

## ⚙️ Features
- 🔗 Fetches the final URL from shortened or redirected links.
- 📋 Automatically adds `https://` if you forgot it!
- 🌍 API + Beautiful HTML interface for ease of use.

<!---
## 🚀 Live Demo
[Check out the live version here!](https://your-live-link.com)
--->

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

### GitHub Pages (Frontend only)
You can deploy the web interface using GitHub Pages:
1. Go to your repository settings.
2. Enable GitHub Pages from the `main` branch.
3. Voilà! Your frontend is live!

### Heroku Deployment (Full Stack)

To deploy the API + Frontend to Heroku:
1. **Create a Heroku app** 🏗️
   ```bash
   heroku create
   ```

2. **Push to Heroku** 🚀
   ```bash
   git push heroku main
   ```

3. **Access your app** 🌐
   Visit `https://your-heroku-app.herokuapp.com`!

## 🛠️ Technologies Used

- **Node.js** for the backend
- **Express.js** for routing
- **HTML + CSS** for the web interface
- **Fetch API** for client-server communication

## 👨‍💻 Contributing

Feel free to fork, clone, and submit pull requests! We love contributors. 💡

## 📝 License

This project is licensed under the MIT License. Enjoy and modify as you like! 🎉
