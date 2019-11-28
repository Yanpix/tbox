import { BASE_URL } from '../utils/constants';

class PhotosApiService {
  getAllPhotos = (token) =>
    fetch(`${BASE_URL}/photos`, {
      method: 'GET',
      headers: {
        'x-access-token': token,
      },
    }).then((resp) => resp.json());

  sendPhotos = (token, formData) =>
    fetch(`${BASE_URL}/photos/create`, {
      method: 'POST',
      headers: {
        'x-access-token': token,
      },
      body: formData,
    }).then((resp) => resp.json());

  removePhoto = (token, id) =>
    fetch(`${BASE_URL}/photos/${id}/delete`, {
      method: 'DELETE',
      headers: {
        'x-access-token': token,
      },
    }).then((resp) => resp.json());
}

export default new PhotosApiService();
