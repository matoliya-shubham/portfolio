import { createContext, useState } from "react";

type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
  const [dark, setDark] = useState<boolean>(false);

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
