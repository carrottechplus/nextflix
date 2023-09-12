const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const requests = {
	original: `${BASE_URL}/trending/all/day?with_networks=Netflix&api_key=${API_KEY}`,
	top: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&with_networks=Netflix&languages=en-US`,
	sf: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=Netflix&languages=en-US&with_genres=878`,
	animation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=Netflix&languages=en-US&with_genres=16`,
	drama: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=Netflix&languages=en-US&with_genres=18`,
	comedy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=Netflix&languages=en-US&with_genres=35`,
	fantasy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=Netflix&languages=en-US&with_genres=14`,
};

export default requests;
