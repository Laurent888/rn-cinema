import React, { createContext, useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { getDistance } from 'geolib';
import { ILocation, MovieProps, TheaterProps } from '@lib/types/types';
import { mockTheaters, mockData } from '../../data/mockData';
import { captureErrors } from '@lib/utils/log';

interface MovieContextProps {
  movies: MovieProps[];
  theatres: TheaterProps[];
  appLoading: boolean;
  location: ILocation | null;
}

const MovieContext = createContext<MovieContextProps>({
  movies: [],
  theatres: [],
  appLoading: true,
  location: null,
});

interface MovieProviderProps {
  children: React.ReactNode;
}

const MovieProvider = ({ children }: MovieProviderProps) => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [theatres, setTheatres] = useState<TheaterProps[]>([]);
  const [location, setLocation] = useState<ILocation | null>(null);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          return setLocation(null);
        }

        const res = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });

        const userCoordinates = {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        };
        setLocation(userCoordinates);
      } catch (error) {
        captureErrors('Movie context | Location :', error);
      }
    })();

    setMovies(mockData);
    setTheatres(mockTheaters);
  }, []);

  useEffect(() => {
    if (movies.length !== 0 && theatres.length !== 0) {
      setAppLoading(false);
    }
  }, [movies, theatres]);

  return (
    <MovieContext.Provider value={{ movies, theatres, location, appLoading }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
