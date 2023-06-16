import { getCookie } from 'utils';

export const hasLoginAccess = (cookieName = 'IDToken'): boolean => getCookie(cookieName) === 'true';
