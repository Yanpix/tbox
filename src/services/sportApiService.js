import { BASE_URL } from '../utils/constants';

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
