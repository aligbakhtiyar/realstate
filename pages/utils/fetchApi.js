import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "152e8fa532mshccd434c9613f943p1e2f61jsn98dc98cd6288"
      
    }
  });
  
  return data;
}
