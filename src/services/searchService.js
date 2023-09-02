import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, option = '1') => {
  try {
    const res = await httpRequest.get('/search', {
      //promise()
      params: {
        q,
        option,
      },
    });
    return res.comics;
  } catch (error) {
    console.log(error);
  }
};
