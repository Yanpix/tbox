const BASE_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

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
