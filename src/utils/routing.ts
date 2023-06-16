import { history } from 'utils';

export type RedirectOption = { search?: string; state?: { from?: string } };

export const localRedirect = (path: string, params?: RedirectOption) => {
  history.push({
    pathname: path,
    search: params?.search || ''
  });
};
