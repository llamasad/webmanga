import * as httpRequest from '~/utils/httpRequest';

export const recentService = async () => {
  try {
    const res = await httpRequest.get('/recent-update-comics', {
      params: {
        page: 1,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
