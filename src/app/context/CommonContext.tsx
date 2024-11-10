// context/CommonContext.tsx
import { createContext, useContext, useState } from "react";

interface CommonContextProps {
  commonState: string;
  setCommonState: (state: string) => void;
}

const CommonContext = createContext<CommonContextProps | undefined>(undefined);

export const CommonProvider = ({ children }: { children: React.ReactNode }) => {
  const [commonState, setCommonState] = useState("");

  return (
    <CommonContext.Provider value={{ commonState, setCommonState }}>
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