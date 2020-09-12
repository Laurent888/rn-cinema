import dayjs from 'dayjs';

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
