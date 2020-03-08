import { isAfter } from 'date-fns';

const isAuthorized = (token: string = '0') => {
  try {
    const oneHour: number = 60 * 60 * 1000;

    const now: number = new Date().getTime();

    const parsedToken: number = parseInt(token, undefined);

    const timeDifference: number = now - parsedToken;

    return timeDifference < oneHour && !isAfter(parsedToken, now);

  } catch (error) {
    return false;
  }
};

export {
    isAuthorized,
};
