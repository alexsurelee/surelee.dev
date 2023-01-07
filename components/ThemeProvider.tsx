import * as React from "react";

export enum Themes {
  "neobrutal",
}

export enum Colors {
  "dark",
  "light",
}

type Theme = {
  theme: Themes;
  color: Colors;
};

const defaultTheme: Theme = { theme: Themes.neobrutal, color: Colors.light };

export const ThemeContext = React.createContext(defaultTheme);

type ThemeProviderProps = typeof ThemeContext.Provider & {
  children: React.ReactNode;
  theme: Theme;
};

export function ThemeProvider({
  children,
  theme,
  ...props
}: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={theme} {...props}>
      {children}
    </ThemeContext.Provider>
  );
}
