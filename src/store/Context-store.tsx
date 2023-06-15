import React, { createContext } from "react";

export enum Theme {
    Dark = "Dark",
    Light = "Light",
}

export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({ theme: Theme.Light, setTheme: (theme) => { } });

// const ThemeContextProvider: React.FC<React.ReactNode> = ({ children }) => {
    
// }



/* import { useContext } from "react";
import { ThemeContext } from "./themeContext";

const MyComponent = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            Current theme: {theme}
            <button onClick={() => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)}>Toggle Theme</button>
        </div>
    );
}; */