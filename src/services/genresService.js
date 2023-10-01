import * as httpRequest from '~/utils/httpRequest';

export const genresService = async () => {
  try {
    const res = await httpRequest.get('/genres');
    return res;
  } catch (error) {
    console.log(error);
  }
};
