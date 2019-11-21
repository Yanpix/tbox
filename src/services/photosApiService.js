const BASE_URL = 'http://localhost:3000';

class PhotosApiService {
  getAllPhotos = () =>
    fetch(`${BASE_URL}/photos`, {
      method: 'GET',
      headers: {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRmZmFkNmE4YTFlMDQxNDk1ODVjOSIsImlhdCI6MTU3NDMzMDA1OSwiZXhwIjoxNTc0NDE2NDU5fQ.LMFPET8um5NWvIkoRJXCFMKkoxjpsZai4Mq_YfUHSrE',
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
