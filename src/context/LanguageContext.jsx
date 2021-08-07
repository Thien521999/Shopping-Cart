// libs
import React, { createContext, useState } from "react";
import dictionary from "Language";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [defaultLanguage, setDefaultLanguage] = useState(dictionary.EN);
    const handleChangeVN = () => {
        setDefaultLanguage(dictionary.VN);
    };
    const handleChangeEN = () => {
        setDefaultLanguage(dictionary.EN);
    };
    const initial = {
        defaultLanguage,
        handleChangeVN,
        handleChangeEN,
        setDefaultLanguage,
    };

    return <LanguageContext.Provider value={initial}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
