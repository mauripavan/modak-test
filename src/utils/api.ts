import axios from 'axios';
const BASE_URL = 'https://api.artic.edu/api/v1';

export const getArtWorks = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/artworks?fields=id,title,artist_title,date_start,date_end,image_id`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
