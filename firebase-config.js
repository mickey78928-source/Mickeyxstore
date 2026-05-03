// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCN6O11lX6YJvQrWBi7yNZ7GEf06pYVohg",
  authDomain: "mickeyera46.firebaseapp.com",
  databaseURL: "https://mickeyera46-default-rtdb.firebaseio.com",
  projectId: "mickeyera46",
  storageBucket: "mickeyera46.firebasestorage.app",
  messagingSenderId: "101241284045",
  appId: "1:101241284045:web:bc3c88d9638c13fbe3d084",
  measurementId: "G-2W796DC72E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };