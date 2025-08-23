import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, increment, onDisconnect } from "firebase/database";

// Firebase configuration (replace with your own Firebase project config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const VisitorCounter = () => {
  const [totalVisits, setTotalVisits] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    // Reference to the total visits counter in Firebase
    const visitsRef = ref(database, "portfolio/visits");
    // Reference to the active users list
    const activeUsersRef = ref(database, "portfolio/activeUsers");
    // Reference to a unique user session
    const userSessionRef = ref(database, `portfolio/activeUsers/${Date.now()}_${Math.random()}`);

    // Increment total visits
    set(visitsRef, increment(1));

    // Set user as active
    set(userSessionRef, true);
    // Remove user from active list when they disconnect
    onDisconnect(userSessionRef).remove();

    // Listen for total visits updates
    const unsubscribeVisits = onValue(visitsRef, (snapshot) => {
      const visits = snapshot.val() || 0;
      setTotalVisits(visits);
    });

    // Listen for active users updates
    const unsubscribeActiveUsers = onValue(activeUsersRef, (snapshot) => {
      const users = snapshot.val();
      const activeCount = users ? Object.keys(users).length : 0;
      setActiveUsers(activeCount);
    });

    // Cleanup on component unmount
    return () => {
      unsubscribeVisits();
      unsubscribeActiveUsers();
      // Remove user session when component unmounts
      set(userSessionRef, null);
    };
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16" aria-label="Visitor Counter Section">
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center text-3xl font-bold text-white mb-8"
      >
        Portfolio Visitors
      </motion.h2>
      <div className="flex flex-col items-center gap-4 text-center text-neutral-200">
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-lg"
        >
          Total Visits: <span className="text-cyan-400 font-semibold">{totalVisits}</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-lg"
        >
          Active Users: <span className="text-cyan-400 font-semibold">{activeUsers}</span>
        </motion.p>
      </div>
    </section>
  );
};

export default VisitorCounter;