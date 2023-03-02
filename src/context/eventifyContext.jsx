import React, { createContext, useState } from 'react';

export const eventifyContext = createContext({});

// eslint-disable-next-line react/prop-types
export const RecordShelfContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('#9B9999');

  return (<eventifyContext.Provider value={{ theme, setTheme }}>
    {children}
  </eventifyContext.Provider>
  );
};
