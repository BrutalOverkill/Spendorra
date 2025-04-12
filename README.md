# Spendorra 💰

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_DEPLOY_ID_HERE/deploy-status)](https://app.netlify.com/sites/spendorra/deploys)

Spendorra is a subscription tracking web application that helps users monitor their recurring expenses and analyze spending patterns.

🔗 **Live Demo**: [https://spendorra.netlify.app](https://spendorra.netlify.app)

## Features ✨

- ✅ Secure user authentication (signup/login)
- 📊 Add, edit, and delete subscription entries
- 📈 Interactive analytics dashboard with visual charts
- 🔔 Payment due date notifications
- 📱 Fully responsive design
- 🔄 Real-time data sync with Firebase
- 📅 Subscription calendar view
- 💸 Monthly spending summary

## Tech Stack 🛠️

- **Frontend**: Next.js 14 (React 18)
- **State Management**: React Context API
- **Database**: Firebase Firestore (NoSQL)
- **Authentication**: Firebase Auth
- **Deployment**: Netlify
- **UI Components**: My own custom CSS

## Screenshots 🖼️

![Dashboard](https://via.placeholder.com/800x400?text=Spendorra+Dashboard)
![Subscription List](https://via.placeholder.com/800x400?text=Subscription+List)
![Analytics](https://via.placeholder.com/800x400?text=Analytics+Dashboard)

## Getting Started 🚀

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later) or yarn
- Firebase account

### Installation

1. Clone the repository:
git clone https://github.com/YOUR_USERNAME/spendorra.git
cd spendorra

2. Install dependencies:
npm install
# or
yarn install

3. Set up Firebase:
- Create a new Firebase project at Firebase Console

- Enable Email/Password authentication

- Create a Firestore database in test mode

- Add your Firebase config to lib/firebase.js (or your config file)

4. Configuration ⚙️

Create a .env.local file in the root directory with your Firebase config:

env
Copy
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

5. Project Structure 📂

spendorra/
├── components/       # Reusable components
├── context/          # React context providers
├── lib/              # Utility functions and Firebase config
├── pages/            # Next.js pages
│   ├── api/          # API routes
│   ├── auth/         # Authentication pages
│   ├── dashboard/    # Main application pages
│   └── _app.js       # Main app component
├── public/           # Static files
├── styles/           # Global styles
└── README.md         # This file

### Deployment 🌐

Netlify Deployment

- Push your code to a GitHub repository

- Create a new site in Netlify and connect your GitHub repo

- Add these environment variables in Netlify:

- All Firebase environment variables from your .env.local

- NEXT_PUBLIC_BASE_URL: https://spendorra.netlify.app

- Set build command: npm run build or yarn build

- Set publish directory: out (if using static export)

Firebase Hosting (Alternative)

npm run build
firebase init hosting
firebase deploy


### Contributing 🤝
I welcome contributions! Please follow these steps:

- Fork the repository

- Create a new branch (git checkout -b feature/your-feature)

- Commit your changes (git commit -m 'Add some feature')

- Push to the branch (git push origin feature/your-feature)

- Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

### Support ❤️
If you find Spendorra useful, consider:

- ⭐ Starring this repository on GitHub

- 🐛 Reporting issues in the GitHub Issues section

- 💡 Suggesting new features