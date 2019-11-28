const BASE_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

class SportApiService {
  getLosers = (teamName) =>
    fetch(`${BASE_URL}/sports/getLosers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        team: teamName,
      }),
    }).then((resp) => resp.json());
}

export default new SportApiService();
