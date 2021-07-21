import axios from 'axios';

export default function dataRequest(url) {
  axios.get(url)
  .then((response) => response)
  .catch((error) => console.log(error));
}
