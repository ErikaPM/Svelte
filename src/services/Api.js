import axios from "axios";
import { get } from "svelte/store";

const axiosAPI = "http://demo8957812.mockable.io/"

const getData = () => {
  return axios.get(axiosAPI)
  .then(resp => {
      console.log("API",resp.data);
      return resp.data.results
  })
  .catch(err => {
      console.error(err);
  })
}

export default getData;