const BASE_URL = 'http://localhost:3000';

class NewsApiService {
  getNews = () => {
    return fetch(`${BASE_URL}/news`, {
      headers: {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRmZmFkNmE4YTFlMDQxNDk1ODVjOSIsImlhdCI6MTU3NDI0MDg3MywiZXhwIjoxNTc0MzI3MjczfQ.DNjcjvq7Sf89nE-aXMB8Vquy0trhRqgTfy503TdFxUs',
      },
    }).then((resp) => resp.json());
  };
}

export default new NewsApiService();
