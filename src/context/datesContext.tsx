import React, { createContext, useState } from 'react';

const DatesContext = createContext({
  dateMovie: '',
});

const DatesProvider = ({ children }) => {
  const [dateMovie, setDateMovie] = useState('');

  const handleSetDate = (date: string) => {
    setDateMovie(date);
  };

  return (
    <DatesContext.Provider value={{ dateMovie, handleSetDate }}>{children}</DatesContext.Provider>
  );
};

export { DatesContext, DatesProvider };
