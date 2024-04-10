"use client";

import { useEffect, useState } from "react";
import { getCurrentUser } from "@/firebase/auth";

function TestUserLogin() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user);
      setLoading(false);
      console.log(user);
    });
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Cards</h1>
        <span>LOADING...</span>
      </div>
    );
  } else {
    if (!user) {
      return (
        <div>
          <h1>Cards</h1>
          <span>Please Log In...</span>
        </div>
      );
    }
  }

  return (
    <div>
      <h1>Cards</h1>
      <span>{user}</span>
    </div>
  );
}

export default TestUserLogin;
