import axios from 'axios';

export const getRandomJoke = async () => {
  const { data } = await axios.get('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json'
    }
  });
  return data.joke
}
