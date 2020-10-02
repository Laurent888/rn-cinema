export const captureErrors = (origin: string, error: any) => {
  if (!__DEV__) {
    return;
  }

  const message = `Error : ${origin}`;

  const errorMessage = {
    message: origin,
    error,
  };

  console.log(message, errorMessage);
};
