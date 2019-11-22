const BASE_URL = 'http://localhost:3000';

class UserApiService {
  registerUser = (formData) =>
    fetch(`${BASE_URL}/users/register`, {
      method: 'POST',
      body: formData,
    }).then((resp) => resp.json());

  loginUser = (name, password) =>
    fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
      }),
    }).then((resp) => resp.json());

  logoutUser = (token) =>
    fetch(`${BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'x-access-token': token,
      },
    });
}

export default new UserApiService();
