const BASE_URL = 'http://localhost:3000';

class NewsApiService {
  getNews = () => {
    return fetch(`${BASE_URL}/news`, {
      headers: {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRmZmFkNmE4YTFlMDQxNDk1ODVjOSIsImlhdCI6MTU3NDMzMDA1OSwiZXhwIjoxNTc0NDE2NDU5fQ.LMFPET8um5NWvIkoRJXCFMKkoxjpsZai4Mq_YfUHSrE',
      },
    }).then((resp) => resp.json());
  };
}

export default new NewsApiService();
