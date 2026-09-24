import { createContext, useContext, useState } from "react";
import { loginUser, logoutUser } from "../api/authApi";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // On page load, read the saved user from localStorage
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // Call the login API and save the result
  const login = async (formData) => {
    const res = await loginUser(formData);
    const { user, accessToken } = res.data.data; // backend sends data.data
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  // Call the logout API and clear everything
  const logout = async () => {
    try {
      await logoutUser();
    } catch (err) {
      console.log(err); // even if it fails, log out on the frontend
    }
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Short helper so pages can write: const { user } = useAuth();
export const useAuth = () => useContext(AuthContext);
