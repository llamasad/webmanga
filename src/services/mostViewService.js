import * as httpRequest from '~/utils/httpRequest';

export const mostViewService = async (path) => {
  try {
    const res = await httpRequest.get(path, {
      params: {
        page: 1,
        status: 'all',
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
