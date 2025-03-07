# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev


src/
├── services/
│   └── authService.js        // Pour les appels API d'authentification
├── components/
│   ├── Auth/ // optionnel
│   │   └── AuthWrapper.jsx // HOC ou wrapper pour protéger les routes
│   ├── Navbar.jsx        // Barre de navigation
├── contexts/
│   └── AuthContext.jsx   // Fournit l'état et les actions pour l'authentification
├── pages/
│   ├── Auth/ 
│   │   └── Login.jsx     // Page de connexion
│   │   └── Register.jsx  // Page d'inscription
│   ├── Dashboard.jsx // Page principale après connexion
│   └── NotFound.jsx      // Page 404
├── routes/
│   └── AppRoutes.jsx     // Configuration des routes
├── styles/
│   └── global.css        // Styles globaux
│   └── auth.css          // Styles auth
├── App.jsx               // Composant principal
└── utils/
    └── tokenStorage.js   // Gestion des tokens (localStorage, cookies, etc.)
