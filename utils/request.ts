const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const requests = {
	original: `${BASE_URL}/trending/all/day?with_networks=Netflix&api_key=${API_KEY}`,
	top: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&with_networks=Netflix&languages=en-US`,
	animation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=Netflix&languages=en-US&with_genres=16`,
	fantasy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=Netflix&languages=en-US&with_genres=14`,
	science_fiction: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=Netflix&languages=en-US&with_genres=878`,
	TV_movies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=Netflix&languages=en-US&with_genres=10770`,
	western: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=Netflix&languages=en-US&with_genres=37`,
};

export default requests;
