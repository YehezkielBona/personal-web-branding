import { createContext, useState, useEffect } from "react";

import type { ReactNode } from "react";
import type { User } from "../types";

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("ademayem_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    if (!email.trim() || !password.trim()) {
      return false;
    }
    const emailValid = /\S+@\S+\.\S+/.test(email);
    if (!emailValid) {
      return false;
    }
    if (password.length < 6) {
      return false;
    }

    const loggedInUser: User = {
      email,
      name: email.split("@")[0],
      role: email === "admin@ademayem.id" ? "admin" : "member",
    };

    setUser(loggedInUser);
    localStorage.setItem("ademayem_user", JSON.stringify(loggedInUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ademayem_user");
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
