🔐 React Password Generator

A React-based Password Generator App that lets you create strong, secure, and random passwords instantly.
You can customize password length and choose which character types (uppercase, lowercase, numbers, and symbols) to include.

🚀 Features

✅ Generate random passwords instantly
✅ Include or exclude:

Uppercase letters

Lowercase letters

Numbers

Special symbols
✅ Adjustable password length (10–20 characters)
✅ One-click copy to clipboard
✅ Built using React Hooks (useState)

🧩 Tech Stack

React.js (Functional Components + Hooks)

JavaScript (ES6+)

CSS for styling

⚙️ How It Works

Select the character types you want to include.

Adjust the password length (between 10 and 20).

Click “Generate Password” to create a new random password.

Copy it to your clipboard with one click!

📂 Project Structure
src/
│
├── App.js           # Main component logic
├── App.css          # Styling for the app
├── data/
│   └── symbol.js    # Contains character sets (UC, LC, NC, SC)
└── index.js         # Renders the App

🧠 Core Logic Explained

State Management:
The app uses multiple useState hooks to track:

Selected options (uppercase, lowercase, number, symbol)

Password length (passwordlength)

Final generated password (fpass)

Password Generation:
Based on the user’s choices, a combined character set is created and a random password is generated using:

charSet[Math.floor(Math.random() * charSet.length)]


Clipboard Copy:
Uses the Clipboard API:

navigator.clipboard.writeText(fpass)

🧠 Example Output
Password Length: 12
Options: Uppercase, Numbers, Symbols
Generated Password: G7@LMrZ#1qP!

🖥️ Setup & Installation
# Clone the repo
git clone https://github.com/shoaib5124/password_generater

# Go to project folder
cd project1

# Install dependencies
npm install

# Run the app
npm start


Your app will be live on
👉 http://localhost:3000/

🎨 Preview

(Add your app screenshot here)
Example:

![Password Generator Screenshot](.screenshot.png)

💡 Future Enhancements

Add strength meter (weak/medium/strong)

Dark/light theme toggle

Option to save passwords locally

Responsive UI with better design

👨‍💻 Author

Shoaib Ul Hassan
🚀 Frontend Developer | React Enthusiast
LinkedIn:

