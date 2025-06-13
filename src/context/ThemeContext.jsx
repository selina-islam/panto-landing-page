import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {
        const [isDarkmode, setIsDarkMode] = useState(false)
        const toggleTheme = () => {
                setIsDarkMode(!isDarkmode)
        }
        useEffect(() => {
                if (isDarkmode) {
                        document.body.classList.add('dark')
                } else {
                        document.body.classList.remove('dark')
                }
        },[isDarkmode])
        return (
                <ThemeContext.Provider value={{isDarkmode, toggleTheme}}>
                        {children}
                </ThemeContext.Provider>
        )
}