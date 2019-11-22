const BASE_URL = 'http://localhost:3000';

class NewsApiService {
  getNews = () => {
    return fetch(`${BASE_URL}/news`, {
      headers: {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRmZmFkNmE4YTFlMDQxNDk1ODVjOSIsImlhdCI6MTU3NDQxNzA0NSwiZXhwIjoxNTc0NTAzNDQ1fQ.gDcI4QsPtuHzXaa8blx-9OOQniFQ7K-QDKhxp1oEXfc',
      },
    }).then((resp) => resp.json());
  };
}

export default new NewsApiService();
