import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider; //exporting a variable who's ultimately value is ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}