import { createContext, useState } from "react";

type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
  const [dark, setDark] = useState<boolean>(true);

  const toggleTheme = () => {
    setDark((dark) => !dark);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeContextProvider };
