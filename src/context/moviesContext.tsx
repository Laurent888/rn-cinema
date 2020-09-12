import React, { createContext, useState, useEffect } from 'react';
import { MovieProps, TheaterProps } from '@lib/types/types';
import { mockTheaters, mockData } from '../../data/mockData';

interface MovieContextProps {
  movies: MovieProps[];
  theatres: TheaterProps[];
  appLoading: boolean;
}

const MovieContext = createContext<MovieContextProps>({
  movies: [],
  theatres: [],
  appLoading: true,
});

interface MovieProviderProps {
  children: React.ReactNode;
}

const MovieProvider = ({ children }: MovieProviderProps) => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [theatres, setTheatres] = useState<TheaterProps[]>([]);
  const [isContextLoading, setIsContextLoading] = useState(true);

  useEffect(() => {
    setMovies(mockData);
    setTheatres(mockTheaters);
  }, []);

  useEffect(() => {
    if (movies.length !== 0 && theatres.length !== 0) {
      setIsContextLoading(false);
    }
  }, [movies, theatres]);

  return (
    <MovieContext.Provider value={{ movies, theatres, isContextLoading }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
