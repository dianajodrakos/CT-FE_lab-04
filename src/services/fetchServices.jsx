import request from 'superagent';

export const getAPI = async (url) => {
  const { body } = await request.get(url);
  return body;
};


