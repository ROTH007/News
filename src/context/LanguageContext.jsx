// src/context/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [isKhmer, setIsKhmer] = useState(() => {
    // Load language preference from localStorage
    const saved = localStorage.getItem('language');
    return saved === 'km';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', isKhmer ? 'km' : 'en');
    console.log('Language changed to:', isKhmer ? 'Khmer' : 'English');
  }, [isKhmer]);

  const toggleLanguage = () => {
    setIsKhmer(prev => !prev);
  };

  const t = (en, km) => (isKhmer ? km : en);

  // Use useMemo to ensure the context value changes when isKhmer changes
  const value = useMemo(() => ({
    isKhmer,
    toggleLanguage,
    t
  }), [isKhmer]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};