import * as httpRequest from '~/utils/httpRequest';

export const recomendService = async () => {
  try {
    const res = await httpRequest.get('/recommend-comics');
    return res;
  } catch (error) {
    console.log(error);
  }
};
