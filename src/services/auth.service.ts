import { isAfter } from 'date-fns';

const isAuthorized = (token: string = '0') => {
    try {
        const oneHour: number = 1 * 60 * 60;

        const now: number = new Date().getTime();

        const parsedToken: number = parseInt(token);

        const timeDifference: number = now - parsedToken;

        return timeDifference < oneHour && !isAfter(parsedToken, now);

    } catch (error) {
        return false;
    }
}


export {
    isAuthorized
}