const BASE_URL = 'http://localhost:3000';

class PhotosApiService {
  getAllPhotos = () =>
    fetch(`${BASE_URL}/photos`, {
      method: 'GET',
      headers: {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRmZmFkNmE4YTFlMDQxNDk1ODVjOSIsImlhdCI6MTU3NDI0MDg3MywiZXhwIjoxNTc0MzI3MjczfQ.DNjcjvq7Sf89nE-aXMB8Vquy0trhRqgTfy503TdFxUs',
      },
    }).then((resp) => resp.json());

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
