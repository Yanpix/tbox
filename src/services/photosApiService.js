const BASE_URL = 'http://localhost:3000';

class PhotosApiService {
  getAllPhotos = () =>
    fetch(`${BASE_URL}/photos`, {
      method: 'GET',
      headers: {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRmZmFkNmE4YTFlMDQxNDk1ODVjOSIsImlhdCI6MTU3NDQxNzA0NSwiZXhwIjoxNTc0NTAzNDQ1fQ.gDcI4QsPtuHzXaa8blx-9OOQniFQ7K-QDKhxp1oEXfc',
      },
    }).then((resp) => resp.json());

  sendPhotos = (formData) =>
    fetch(`${BASE_URL}/photos/create`, {
      method: 'POST',
      headers: {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRmZmFkNmE4YTFlMDQxNDk1ODVjOSIsImlhdCI6MTU3NDQxNzA0NSwiZXhwIjoxNTc0NTAzNDQ1fQ.gDcI4QsPtuHzXaa8blx-9OOQniFQ7K-QDKhxp1oEXfc',
      },
      body: formData,
    }).then((resp) => resp.json());

  removePhoto = (id) =>
    fetch(`${BASE_URL}/photos/${id}/delete`, {
      method: 'DELETE',
      headers: {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRmZmFkNmE4YTFlMDQxNDk1ODVjOSIsImlhdCI6MTU3NDQxNzA0NSwiZXhwIjoxNTc0NTAzNDQ1fQ.gDcI4QsPtuHzXaa8blx-9OOQniFQ7K-QDKhxp1oEXfc',
      },
    }).then((resp) => resp.json());
}

export default new PhotosApiService();
