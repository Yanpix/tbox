import { BASE_URL } from '../utils/constants';

class NewsApiService {
  getNews = (token) => {
    return fetch(`${BASE_URL}/news`, {
      headers: {
        'x-access-token': token,
      },
    }).then((resp) => resp.json());
  };
}

export default new NewsApiService();
