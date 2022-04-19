import { setNewsList } from "../redux/actions/newsActions";
import { setLoading, clearLoading } from "../actions/appActions";
import axios from "axios";

const url =
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2022-04-18&" +
  "sortBy=popularity&" +
  "apiKey=21a2766150ee4e478b04e78ea671016f";

export const getNews = async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(url);
    dispatch(setNewsList(data.articles));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(clearLoading());
  }
};
