const BASE_URL = 'http://localhost:3000';

class PhotosApiService {
  getAllPhotos = () => fetch(`${BASE_URL}/photos`).then((resp) => resp.json());

  sendPhotos = (formData) =>
    fetch(`${BASE_URL}/photos/create`, {
      method: 'POST',
      body: formData,
    }).then((resp) => resp.json());

  removePhoto = (id) =>
    fetch(`${BASE_URL}/photos/${id}/delete`, {
      method: 'DELETE',
    }).then((resp) => resp.json());
}

export default new PhotosApiService();
