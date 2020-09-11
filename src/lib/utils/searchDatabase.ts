import { mockData } from '../../../data/mockData';
import { MovieProps } from '@lib/types/types';

interface SearchResultProps {
  results: MovieProps[];
  length: number;
}

export const searchDatabaseByString = (value: string): SearchResultProps => {
  const matchResult = mockData.filter((movie) => movie.Title.match(new RegExp(value, 'gi')));

  return {
    results: matchResult,
    length: matchResult.length,
  };
};
