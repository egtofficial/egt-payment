import { isClient } from '.';

export const usePaypalToken = () => {
  const search = isClient() ? window.location.search : undefined;
  if (search) {
    return search.split('?token=')[1].split('&')[0];
  }
  return null;
};
