const BASE_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

class TasksApiService {
  getTasks = (token) =>
    fetch(`${BASE_URL}/tasks`, {
      method: 'GET',
      headers: {
        'x-access-token': token,
      },
    }).then((resp) => resp.json());

  addTask = (token, task) =>
    fetch(`${BASE_URL}/tasks/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify(task),
    }).then((resp) => resp.json());

  updateTask = (token, task) =>
    fetch(`${BASE_URL}/tasks/${task._id}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify(task),
    }).then((resp) => resp.json());

  removeTask = (token, task) => {
    const { _id } = task;
    return fetch(`${BASE_URL}/tasks/${_id}/delete`, {
      method: 'DELETE',
      headers: {
        'x-access-token': token,
      },
    }).then((resp) => resp.json());
  };
}

export default new TasksApiService();
