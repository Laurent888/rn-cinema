import dayjs from 'dayjs';
import { getDistance } from 'geolib';
import { GeolibInputCoordinates } from 'geolib/es/types';

export const getNextDates = (numberOfDay = 1): string[] => {
  const currentDate = new Date();

  const arr = [];
  for (let i = 0; i < numberOfDay; i++) {
    const date = dayjs(currentDate).add(i, 'day').format('DD MMM YYYY');
    arr.push(date);
  }

  return arr;
};

export const getFormattedTime = (rawTime: string): string => {
  const timeSplitted = [...rawTime.split('')];
  timeSplitted.splice(2, 0, ':');
  const formattedTime = timeSplitted.join('');

  return formattedTime;
};

interface DistanceProps {
  distanceM: string | number;
  distanceKM: string | number;
}

export const getDistanceTheathreToUser = (
  userCoordinates: GeolibInputCoordinates,
  targetCoordinates: GeolibInputCoordinates,
): DistanceProps => {
  const distance = getDistance(userCoordinates, targetCoordinates);

  const distanceM = distance;
  const distanceKM = (distance / 1000).toFixed(1);

  return {
    distanceM,
    distanceKM,
  };
};
