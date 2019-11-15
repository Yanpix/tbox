class ClothesApiService {
  getClothes = (name = 'name') => {
    return fetch(
      `https://therapy-box.co.uk/hackathon/clothing-api.php?username=${name}`
    ).then((resp) => resp.json());
  };
}

export default new ClothesApiService();
