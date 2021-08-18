import { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // Auth persistence
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setUser(JSON.parse(sessionStorage.getItem("userInfo")));
    } else {
      setUser({});
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>{children}</Router>
    </AuthContext.Provider>
  );
};
