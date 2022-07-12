import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <p>Home</p>
      <p>Current User: {user?.email}</p>
    </div>
  );
};

export default Home;
