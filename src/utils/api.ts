import axios from 'axios';
const BASE_URL = 'https://api.artic.edu/api/v1';

export const getArtWorks = async (page: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/artworks?page=${page}&fields=id,title,artist_title,date_start,date_end,image_id`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleArtWork = async ({id}: {id: number}) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/artworks/${id}?fields=id,title,artist_title,date_start,date_end,image_id,description,date_display,dimensions,medium_display,place_of_origin,credit_line`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getFavouritesArtWorks = async ({ids}: {ids: string}) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/artworks?ids=${ids}&fields=id,title,artist_title,date_start,date_end,image_id`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
