class ClothesApiService {
  getClothes = (name = 'name') =>
    fetch(
      `https://therapy-box.co.uk/hackathon/clothing-api.php?username=${name}`
    ).then((resp) => resp.json());
}

export default new ClothesApiService();
