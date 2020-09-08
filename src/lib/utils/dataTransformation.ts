import { TheaterProps } from '@lib/types/types';

export const getUniqueCities = (data: TheaterProps[]): string[] => {
  const arrayCities = data.map((item) => item.city);
  const uniqueCities = [...Array.from(new Set(arrayCities))];

  return uniqueCities;
};
