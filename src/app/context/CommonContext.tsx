// context/CommonContext.tsx
import { createContext, useContext, useEffect, useState } from "react";

interface CommonContextProps {
  commonState: string;
  setCommonState: (state: string) => void;
}

export const CommonContext = createContext<CommonContextProps | undefined>(undefined);

export const CommonProvider = ({ children }: { children: React.ReactNode }) => {
  const [commonState, setCommonState] = useState("");
  const [user, setUser] = useState("");

  const checkIfUserLoggedin = async () => {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      console.log("No user logged in");
      return;
    }
    const userRes = await fetch("/api/getUser/" + email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user = await userRes.json();
    console.log("User logged in", user.user);
    setUser(user.user);
  };

  useEffect(() => {
    checkIfUserLoggedin();
  }, []);

  return (
    <CommonContext.Provider value={{ commonState, setCommonState, user, setUser }}>
      {children}
    </CommonContext.Provider>
  );
};

export const useCommon = () => {

  const context = useContext(CommonContext);
  if (!context) {
    throw new Error("useCommon must be used within a CommonProvider");
  }
  return context;
};
